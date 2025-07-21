import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsPatchPlus, BsX, BsCheck } from 'react-icons/bs';
import { supabase } from '../../lib/supabase';

interface UploadedImage {
  file: File;
  url: string;
  type: 'logo' | 'featured' | 'gallery';
  uploading: boolean;
  uploaded: boolean;
  publicUrl?: string;
}

interface ListingImageUploadProps {
  onImagesChange: (images: {
    logo?: string;
    featured?: string;
    gallery: string[];
  }) => void;
}

export default function ListingImageUpload({ onImagesChange }: ListingImageUploadProps) {
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [uploading, setUploading] = useState(false);

  const uploadToSupabase = async (file: File, type: string) => {
    try {
      const fileExt = file.name.split('.').pop();
      const fileName = `${type}-${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `listings/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('business-images')
        .upload(filePath, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from('business-images')
        .getPublicUrl(filePath);

      return urlData.publicUrl;
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    }
  };

  const onDrop = useCallback(async (acceptedFiles: File[], type: 'logo' | 'featured' | 'gallery') => {
    const newImages: UploadedImage[] = acceptedFiles.map(file => ({
      file,
      url: URL.createObjectURL(file),
      type,
      uploading: true,
      uploaded: false
    }));

    setImages(prev => [...prev, ...newImages]);
    setUploading(true);

    try {
      for (let i = 0; i < newImages.length; i++) {
        const image = newImages[i];
        const publicUrl = await uploadToSupabase(image.file, type);
        
        setImages(prev => prev.map(img => 
          img.file === image.file 
            ? { ...img, uploading: false, uploaded: true, publicUrl }
            : img
        ));
      }

      // Update parent component with uploaded URLs
      updateParentImages();
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  }, []);

  const updateParentImages = () => {
    const uploadedImages = images.filter(img => img.uploaded && img.publicUrl);
    const logo = uploadedImages.find(img => img.type === 'logo')?.publicUrl;
    const featured = uploadedImages.find(img => img.type === 'featured')?.publicUrl;
    const gallery = uploadedImages.filter(img => img.type === 'gallery').map(img => img.publicUrl!);

    onImagesChange({ logo, featured, gallery });
  };

  const removeImage = (imageToRemove: UploadedImage) => {
    setImages(prev => prev.filter(img => img !== imageToRemove));
    setTimeout(updateParentImages, 0);
  };

  const { getRootProps: getLogoRootProps, getInputProps: getLogoInputProps } = useDropzone({
    onDrop: (files) => onDrop(files, 'logo'),
    accept: { 'image/*': [] },
    maxFiles: 1,
    maxSize: 2 * 1024 * 1024 // 2MB
  });

  const { getRootProps: getFeaturedRootProps, getInputProps: getFeaturedInputProps } = useDropzone({
    onDrop: (files) => onDrop(files, 'featured'),
    accept: { 'image/*': [] },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024 // 5MB
  });

  const { getRootProps: getGalleryRootProps, getInputProps: getGalleryInputProps } = useDropzone({
    onDrop: (files) => onDrop(files, 'gallery'),
    accept: { 'image/*': [] },
    maxFiles: 10,
    maxSize: 5 * 1024 * 1024 // 5MB
  });

  const renderDropzone = (
    getRootProps: () => any,
    getInputProps: () => any,
    type: 'logo' | 'featured' | 'gallery',
    title: string,
    description: string
  ) => {
    const typeImages = images.filter(img => img.type === type);
    const hasImages = typeImages.length > 0;

    return (
      <div className="mb-4">
        <label className="form-label fw-semibold">{title}</label>
        <p className="text-muted small mb-2">{description}</p>
        
        {!hasImages && (
          <div {...getRootProps()} className="dropzone border-2 border-dashed border-primary rounded p-4 text-center cursor-pointer hover-bg-light">
            <input {...getInputProps()} />
            <BsPatchPlus className="fs-2 text-primary mb-2" />
            <p className="mb-0">Drop files here or click to upload</p>
            <small className="text-muted">Max size: {type === 'logo' ? '2MB' : '5MB'}</small>
          </div>
        )}

        {typeImages.map((image, index) => (
          <div key={index} className="position-relative d-inline-block me-2 mb-2">
            <img 
              src={image.url} 
              alt={`${type} preview`}
              className="rounded border"
              style={{ width: type === 'logo' ? '100px' : '150px', height: type === 'logo' ? '100px' : '120px', objectFit: 'cover' }}
            />
            {image.uploading && (
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50 rounded">
                <div className="spinner-border spinner-border-sm text-light" role="status"></div>
              </div>
            )}
            {image.uploaded && (
              <div className="position-absolute top-0 end-0 m-1">
                <BsCheck className="text-success bg-white rounded-circle p-1 fs-5" />
              </div>
            )}
            <button
              type="button"
              className="btn btn-sm btn-danger position-absolute top-0 start-0 m-1 p-1"
              onClick={() => removeImage(image)}
              style={{ lineHeight: 1 }}
            >
              <BsX />
            </button>
          </div>
        ))}

        {hasImages && type === 'gallery' && typeImages.length < 10 && (
          <div {...getRootProps()} className="d-inline-block me-2 mb-2 cursor-pointer">
            <input {...getInputProps()} />
            <div className="border-2 border-dashed border-primary rounded d-flex align-items-center justify-content-center" 
                 style={{ width: '150px', height: '120px' }}>
              <BsPatchPlus className="fs-3 text-primary" />
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      {renderDropzone(
        getLogoRootProps,
        getLogoInputProps,
        'logo',
        'Business Logo',
        'Upload your business logo (recommended: 200x200px, max 2MB)'
      )}

      {renderDropzone(
        getFeaturedRootProps,
        getFeaturedInputProps,
        'featured',
        'Featured Image',
        'Main image for your listing (recommended: 800x600px, max 5MB)'
      )}

      {renderDropzone(
        getGalleryRootProps,
        getGalleryInputProps,
        'gallery',
        'Gallery Images',
        'Showcase your work samples and projects (max 10 images, 5MB each)'
      )}

      {uploading && (
        <div className="alert alert-info">
          <div className="d-flex align-items-center">
            <div className="spinner-border spinner-border-sm me-2" role="status"></div>
            Uploading images...
          </div>
        </div>
      )}
    </div>
  );
}