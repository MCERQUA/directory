import { createClient } from '@supabase/supabase-js'
import { Database } from '../types/supabase'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
})

// Helper types
export type Profile = Database['public']['Tables']['profiles']['Row']
export type ProfileInsert = Database['public']['Tables']['profiles']['Insert']
export type ProfileUpdate = Database['public']['Tables']['profiles']['Update']

export type BusinessListing = Database['public']['Tables']['business_listings']['Row']
export type BusinessListingInsert = Database['public']['Tables']['business_listings']['Insert']
export type BusinessListingUpdate = Database['public']['Tables']['business_listings']['Update']

export type Category = Database['public']['Tables']['categories']['Row']
export type Review = Database['public']['Tables']['reviews']['Row']
export type Booking = Database['public']['Tables']['bookings']['Row']

// Auth helper functions
export const getCurrentUser = async () => {
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error) throw error
  return user
}

export const getCurrentProfile = async () => {
  const user = await getCurrentUser()
  if (!user) return null

  const { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  if (error) throw error
  return profile
}

export const signOut = async () => {
  const { error } = await supabase.auth.signOut()
  if (error) throw error
}

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/auth/callback`
    }
  })
  if (error) throw error
  return data
}

export const signInWithEmail = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  if (error) throw error
  return data
}

export const signUpWithEmail = async (email: string, password: string, fullName: string, userType: 'contractor' | 'customer' = 'customer') => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        user_type: userType
      }
    }
  })
  if (error) throw error
  return data
}

export const resetPassword = async (email: string) => {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/auth/reset-password`
  })
  if (error) throw error
  return data
}

export const updatePassword = async (password: string) => {
  const { data, error } = await supabase.auth.updateUser({
    password
  })
  if (error) throw error
  return data
}

// Business Listings Functions
export const getUserListings = async () => {
  const user = await getCurrentUser()
  if (!user) throw new Error('No authenticated user')

  const { data, error } = await supabase
    .from('business_listings')
    .select(`
      *,
      categories (
        name,
        icon
      )
    `)
    .eq('owner_id', user.id)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export const createListing = async (listing: BusinessListingInsert) => {
  const user = await getCurrentUser()
  if (!user) throw new Error('No authenticated user')

  const { data, error } = await supabase
    .from('business_listings')
    .insert({
      ...listing,
      owner_id: user.id
    })
    .select()
    .single()

  if (error) throw error
  return data
}

export const updateListing = async (id: string, updates: BusinessListingUpdate) => {
  const { data, error } = await supabase
    .from('business_listings')
    .update({
      ...updates,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

export const deleteListing = async (id: string) => {
  const { error } = await supabase
    .from('business_listings')
    .delete()
    .eq('id', id)

  if (error) throw error
}

export const getCategories = async () => {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true })

  if (error) throw error
  return data
}

// Bookings Functions
export const getUserBookings = async (userType: 'contractor' | 'customer') => {
  const user = await getCurrentUser()
  if (!user) throw new Error('No authenticated user')

  const column = userType === 'contractor' ? 'contractor_id' : 'customer_id'
  
  const { data, error } = await supabase
    .from('bookings')
    .select(`
      *,
      business_listings (
        title,
        business_name
      ),
      customer:customer_id (
        full_name,
        email,
        phone
      ),
      contractor:contractor_id (
        full_name,
        email,
        phone,
        business_name
      )
    `)
    .eq(column, user.id)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export const updateBookingStatus = async (id: string, status: string, notes?: string) => {
  const { data, error } = await supabase
    .from('bookings')
    .update({
      status,
      contractor_notes: notes,
      updated_at: new Date().toISOString()
    })
    .eq('id', id)
    .select()
    .single()

  if (error) throw error
  return data
}

// Messages Functions
export const getBookingMessages = async (bookingId: string) => {
  const { data, error } = await supabase
    .from('booking_messages')
    .select(`
      *,
      sender:sender_id (
        full_name,
        avatar_url
      )
    `)
    .eq('booking_id', bookingId)
    .order('created_at', { ascending: true })

  if (error) throw error
  return data
}

export const sendMessage = async (bookingId: string, message: string, messageType: string = 'text') => {
  const user = await getCurrentUser()
  if (!user) throw new Error('No authenticated user')

  const { data, error } = await supabase
    .from('booking_messages')
    .insert({
      booking_id: bookingId,
      sender_id: user.id,
      message,
      message_type: messageType
    })
    .select(`
      *,
      sender:sender_id (
        full_name,
        avatar_url
      )
    `)
    .single()

  if (error) throw error
  return data
}

export const markMessagesAsRead = async (bookingId: string) => {
  const user = await getCurrentUser()
  if (!user) throw new Error('No authenticated user')

  const { error } = await supabase
    .from('booking_messages')
    .update({
      is_read: true,
      read_at: new Date().toISOString()
    })
    .eq('booking_id', bookingId)
    .neq('sender_id', user.id)

  if (error) throw error
}

// Avatar Upload Functions
export const uploadAvatar = async (file: File) => {
  const user = await getCurrentUser()
  if (!user) throw new Error('No authenticated user')

  // Create unique filename
  const fileExt = file.name.split('.').pop()
  const fileName = `${user.id}-${Date.now()}.${fileExt}`
  const filePath = fileName

  // Upload file to Supabase Storage
  const { error: uploadError } = await supabase.storage
    .from('avatars')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false
    })

  if (uploadError) throw uploadError

  // Get public URL
  const { data: urlData } = supabase.storage
    .from('avatars')
    .getPublicUrl(filePath)

  if (!urlData?.publicUrl) throw new Error('Failed to get avatar URL')

  // Update profile with new avatar URL
  const { error: updateError } = await supabase
    .from('profiles')
    .update({ avatar_url: urlData.publicUrl })
    .eq('id', user.id)

  if (updateError) throw updateError

  return urlData.publicUrl
}

export const deleteAvatar = async (avatarUrl: string) => {
  const user = await getCurrentUser()
  if (!user) throw new Error('No authenticated user')

  // Extract file path from URL
  const urlParts = avatarUrl.split('/')
  const fileName = urlParts[urlParts.length - 1]
  const filePath = fileName

  // Delete from storage
  const { error: deleteError } = await supabase.storage
    .from('avatars')
    .remove([filePath])

  if (deleteError) throw deleteError

  // Update profile to remove avatar URL
  const { error: updateError } = await supabase
    .from('profiles')
    .update({ avatar_url: null })
    .eq('id', user.id)

  if (updateError) throw updateError
}