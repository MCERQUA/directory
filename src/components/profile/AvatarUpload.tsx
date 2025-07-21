import React, { useState, useRef } from 'react';
import { uploadAvatar, deleteAvatar } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';
import { BsCamera, BsTrash, BsCheck2Circle } from 'react-icons/bs';

interface AvatarUploadProps {
  currentAvatarUrl?: string | null;
  onAvatarUpdate?: (newAvatarUrl: string | null) => void;
}

const AvatarUpload: React.FC<AvatarUploadProps> = ({ 
  currentAvatarUrl, 
  onAvatarUpdate 
}) => {
  const { refreshProfile } = useAuth();
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setError('Please select an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image file must be less than 5MB');
      return;
    }

    setError(null);
    setSuccess(false);
    setUploading(true);

    try {
      // Delete old avatar if exists
      if (currentAvatarUrl && currentAvatarUrl.includes('supabase')) {
        try {
          await deleteAvatar(currentAvatarUrl);
        } catch (deleteErr) {
          console.warn('Could not delete old avatar:', deleteErr);
        }
      }

      // Upload new avatar
      const newAvatarUrl = await uploadAvatar(file);
      
      // Refresh the profile data
      await refreshProfile();
      
      // Notify parent component
      onAvatarUpdate?.(newAvatarUrl);
      
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      setError(err.message || 'Failed to upload avatar');
    } finally {
      setUploading(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleDeleteAvatar = async () => {
    if (!currentAvatarUrl || !currentAvatarUrl.includes('supabase')) return;
    
    if (!confirm('Are you sure you want to remove your profile picture?')) return;

    setError(null);
    setSuccess(false);
    setDeleting(true);

    try {
      await deleteAvatar(currentAvatarUrl);
      
      // Refresh the profile data
      await refreshProfile();
      
      // Notify parent component
      onAvatarUpdate?.(null);
      
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err: any) {
      setError(err.message || 'Failed to remove avatar');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <div className="avatar-upload">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      
      {error && (
        <div className="alert alert-danger alert-sm mb-3">
          {error}
        </div>
      )}

      {success && (
        <div className="alert alert-success alert-sm mb-3">
          <BsCheck2Circle className="me-1" />
          Avatar updated successfully!
        </div>
      )}

      <div className="d-flex gap-2 justify-content-center">
        <button
          type="button"
          className="btn btn-sm btn-primary"
          onClick={handleFileSelect}
          disabled={uploading || deleting}
        >
          {uploading ? (
            <>
              <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
              Uploading...
            </>
          ) : (
            <>
              <BsCamera className="me-1" />
              {currentAvatarUrl ? 'Change Photo' : 'Upload Photo'}
            </>
          )}
        </button>

        {currentAvatarUrl && currentAvatarUrl.includes('supabase') && (
          <button
            type="button"
            className="btn btn-sm btn-outline-danger"
            onClick={handleDeleteAvatar}
            disabled={uploading || deleting}
          >
            {deleting ? (
              <>
                <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                Removing...
              </>
            ) : (
              <>
                <BsTrash className="me-1" />
                Remove
              </>
            )}
          </button>
        )}
      </div>

      <div className="text-center mt-2">
        <small className="text-muted">
          Max file size: 5MB. Supported formats: JPG, PNG, GIF
        </small>
      </div>
    </div>
  );
};

export default AvatarUpload;