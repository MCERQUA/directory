export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      booking_messages: {
        Row: {
          attachment_url: string | null
          booking_id: string
          created_at: string | null
          id: string
          is_read: boolean | null
          message: string
          message_type: string | null
          read_at: string | null
          sender_id: string
        }
        Insert: {
          attachment_url?: string | null
          booking_id: string
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message: string
          message_type?: string | null
          read_at?: string | null
          sender_id: string
        }
        Update: {
          attachment_url?: string | null
          booking_id?: string
          created_at?: string | null
          id?: string
          is_read?: boolean | null
          message?: string
          message_type?: string | null
          read_at?: string | null
          sender_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "booking_messages_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "booking_messages_sender_id_fkey"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      booking_status_history: {
        Row: {
          booking_id: string
          change_reason: string | null
          changed_by: string | null
          created_at: string | null
          id: string
          new_status: string
          notes: string | null
          old_status: string | null
        }
        Insert: {
          booking_id: string
          change_reason?: string | null
          changed_by?: string | null
          created_at?: string | null
          id?: string
          new_status: string
          notes?: string | null
          old_status?: string | null
        }
        Update: {
          booking_id?: string
          change_reason?: string | null
          changed_by?: string | null
          created_at?: string | null
          id?: string
          new_status?: string
          notes?: string | null
          old_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "booking_status_history_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "booking_status_history_changed_by_fkey"
            columns: ["changed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      bookings: {
        Row: {
          access_instructions: string | null
          admin_notes: string | null
          booking_reference: string
          cancellation_reason: string | null
          cancelled_at: string | null
          cancelled_by: string | null
          completion_notes: string | null
          contractor_id: string
          contractor_notes: string | null
          created_at: string | null
          customer_id: string
          customer_notes: string | null
          deposit_amount: number | null
          deposit_paid: boolean | null
          description: string | null
          estimated_cost: number | null
          estimated_duration_hours: number | null
          final_price: number | null
          id: string
          listing_id: string
          materials_needed: string[] | null
          payment_method: string | null
          project_type: string | null
          quoted_price: number | null
          refund_amount: number | null
          review_requested: boolean | null
          review_submitted: boolean | null
          scheduled_date: string
          scheduled_end_time: string | null
          scheduled_start_time: string | null
          service_address: string
          service_city: string
          service_state: string
          service_zip_code: string | null
          source: string | null
          special_requirements: string | null
          status: string | null
          title: string
          tools_needed: string[] | null
          updated_at: string | null
          urgency_level: string | null
          warranty_expires_at: string | null
          warranty_period_months: number | null
          work_completed_at: string | null
          work_photos: string[] | null
        }
        Insert: {
          access_instructions?: string | null
          admin_notes?: string | null
          booking_reference: string
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          completion_notes?: string | null
          contractor_id: string
          contractor_notes?: string | null
          created_at?: string | null
          customer_id: string
          customer_notes?: string | null
          deposit_amount?: number | null
          deposit_paid?: boolean | null
          description?: string | null
          estimated_cost?: number | null
          estimated_duration_hours?: number | null
          final_price?: number | null
          id?: string
          listing_id: string
          materials_needed?: string[] | null
          payment_method?: string | null
          project_type?: string | null
          quoted_price?: number | null
          refund_amount?: number | null
          review_requested?: boolean | null
          review_submitted?: boolean | null
          scheduled_date: string
          scheduled_end_time?: string | null
          scheduled_start_time?: string | null
          service_address: string
          service_city: string
          service_state: string
          service_zip_code?: string | null
          source?: string | null
          special_requirements?: string | null
          status?: string | null
          title: string
          tools_needed?: string[] | null
          updated_at?: string | null
          urgency_level?: string | null
          warranty_expires_at?: string | null
          warranty_period_months?: number | null
          work_completed_at?: string | null
          work_photos?: string[] | null
        }
        Update: {
          access_instructions?: string | null
          admin_notes?: string | null
          booking_reference?: string
          cancellation_reason?: string | null
          cancelled_at?: string | null
          cancelled_by?: string | null
          completion_notes?: string | null
          contractor_id?: string
          contractor_notes?: string | null
          created_at?: string | null
          customer_id?: string
          customer_notes?: string | null
          deposit_amount?: number | null
          deposit_paid?: boolean | null
          description?: string | null
          estimated_cost?: number | null
          estimated_duration_hours?: number | null
          final_price?: number | null
          id?: string
          listing_id?: string
          materials_needed?: string[] | null
          payment_method?: string | null
          project_type?: string | null
          quoted_price?: number | null
          refund_amount?: number | null
          review_requested?: boolean | null
          review_submitted?: boolean | null
          scheduled_date?: string
          scheduled_end_time?: string | null
          scheduled_start_time?: string | null
          service_address?: string
          service_city?: string
          service_state?: string
          service_zip_code?: string | null
          source?: string | null
          special_requirements?: string | null
          status?: string | null
          title?: string
          tools_needed?: string[] | null
          updated_at?: string | null
          urgency_level?: string | null
          warranty_expires_at?: string | null
          warranty_period_months?: number | null
          work_completed_at?: string | null
          work_photos?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "bookings_cancelled_by_fkey"
            columns: ["cancelled_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_contractor_id_fkey"
            columns: ["contractor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "bookings_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "business_listings"
            referencedColumns: ["id"]
          },
        ]
      }
      business_listings: {
        Row: {
          accepts_online_booking: boolean | null
          accepts_online_payments: boolean | null
          address: string | null
          availability_schedule: Json | null
          average_rating: number | null
          business_license: string | null
          business_name: string | null
          category_id: string
          certifications: string[] | null
          city: string | null
          contact_count: number | null
          country: string | null
          created_at: string | null
          deposit_percentage: number | null
          deposit_required: boolean | null
          description: string | null
          email: string | null
          emergency_services: boolean | null
          employees_count: number | null
          featured_image_url: string | null
          featured_until: string | null
          gallery_images: string[] | null
          hourly_rate: number | null
          id: string
          insurance_info: string | null
          is_available: boolean | null
          is_featured: boolean | null
          is_verified: boolean | null
          latitude: number | null
          longitude: number | null
          max_project_budget: number | null
          meta_description: string | null
          meta_title: string | null
          min_project_budget: number | null
          owner_id: string
          phone: string | null
          pricing_model: string | null
          response_rate: number | null
          response_time_hours: number | null
          review_count: number | null
          service_area_radius: number | null
          slug: string
          state: string | null
          status: string | null
          subcategory: string | null
          tags: string[] | null
          title: string
          updated_at: string | null
          video_url: string | null
          view_count: number | null
          website_url: string | null
          years_in_business: number | null
          years_on_platform: number | null
          zip_code: string | null
        }
        Insert: {
          accepts_online_booking?: boolean | null
          accepts_online_payments?: boolean | null
          address?: string | null
          availability_schedule?: Json | null
          average_rating?: number | null
          business_license?: string | null
          business_name?: string | null
          category_id: string
          certifications?: string[] | null
          city?: string | null
          contact_count?: number | null
          country?: string | null
          created_at?: string | null
          deposit_percentage?: number | null
          deposit_required?: boolean | null
          description?: string | null
          email?: string | null
          emergency_services?: boolean | null
          employees_count?: number | null
          featured_image_url?: string | null
          featured_until?: string | null
          gallery_images?: string[] | null
          hourly_rate?: number | null
          id?: string
          insurance_info?: string | null
          is_available?: boolean | null
          is_featured?: boolean | null
          is_verified?: boolean | null
          latitude?: number | null
          longitude?: number | null
          max_project_budget?: number | null
          meta_description?: string | null
          meta_title?: string | null
          min_project_budget?: number | null
          owner_id: string
          phone?: string | null
          pricing_model?: string | null
          response_rate?: number | null
          response_time_hours?: number | null
          review_count?: number | null
          service_area_radius?: number | null
          slug: string
          state?: string | null
          status?: string | null
          subcategory?: string | null
          tags?: string[] | null
          title: string
          updated_at?: string | null
          video_url?: string | null
          view_count?: number | null
          website_url?: string | null
          years_in_business?: number | null
          years_on_platform?: number | null
          zip_code?: string | null
        }
        Update: {
          accepts_online_booking?: boolean | null
          accepts_online_payments?: boolean | null
          address?: string | null
          availability_schedule?: Json | null
          average_rating?: number | null
          business_license?: string | null
          business_name?: string | null
          category_id?: string
          certifications?: string[] | null
          city?: string | null
          contact_count?: number | null
          country?: string | null
          created_at?: string | null
          deposit_percentage?: number | null
          deposit_required?: boolean | null
          description?: string | null
          email?: string | null
          emergency_services?: boolean | null
          employees_count?: number | null
          featured_image_url?: string | null
          featured_until?: string | null
          gallery_images?: string[] | null
          hourly_rate?: number | null
          id?: string
          insurance_info?: string | null
          is_available?: boolean | null
          is_featured?: boolean | null
          is_verified?: boolean | null
          latitude?: number | null
          longitude?: number | null
          max_project_budget?: number | null
          meta_description?: string | null
          meta_title?: string | null
          min_project_budget?: number | null
          owner_id?: string
          phone?: string | null
          pricing_model?: string | null
          response_rate?: number | null
          response_time_hours?: number | null
          review_count?: number | null
          service_area_radius?: number | null
          slug?: string
          state?: string | null
          status?: string | null
          subcategory?: string | null
          tags?: string[] | null
          title?: string
          updated_at?: string | null
          video_url?: string | null
          view_count?: number | null
          website_url?: string | null
          years_in_business?: number | null
          years_on_platform?: number | null
          zip_code?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "business_listings_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_listings_owner_id_fkey"
            columns: ["owner_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      categories: {
        Row: {
          color: string | null
          created_at: string | null
          description: string | null
          display_order: number | null
          icon: string | null
          id: string
          image_url: string | null
          is_active: boolean | null
          is_featured: boolean | null
          meta_description: string | null
          meta_title: string | null
          name: string
          slug: string
          updated_at: string | null
        }
        Insert: {
          color?: string | null
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          icon?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          is_featured?: boolean | null
          meta_description?: string | null
          meta_title?: string | null
          name: string
          slug: string
          updated_at?: string | null
        }
        Update: {
          color?: string | null
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          icon?: string | null
          id?: string
          image_url?: string | null
          is_active?: boolean | null
          is_featured?: boolean | null
          meta_description?: string | null
          meta_title?: string | null
          name?: string
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          address: string | null
          avatar_url: string | null
          bio: string | null
          business_license: string | null
          business_name: string | null
          city: string | null
          country: string | null
          created_at: string | null
          email: string
          email_notifications: boolean | null
          facebook_url: string | null
          full_name: string | null
          hourly_rate: number | null
          id: string
          instagram_url: string | null
          is_verified: boolean | null
          last_active: string | null
          linkedin_url: string | null
          min_project_budget: number | null
          phone: string | null
          profile_completion: number | null
          service_area_radius: number | null
          sms_notifications: boolean | null
          state: string | null
          updated_at: string | null
          user_type: string
          website_url: string | null
          years_experience: number | null
          zip_code: string | null
        }
        Insert: {
          address?: string | null
          avatar_url?: string | null
          bio?: string | null
          business_license?: string | null
          business_name?: string | null
          city?: string | null
          country?: string | null
          created_at?: string | null
          email: string
          email_notifications?: boolean | null
          facebook_url?: string | null
          full_name?: string | null
          hourly_rate?: number | null
          id: string
          instagram_url?: string | null
          is_verified?: boolean | null
          last_active?: string | null
          linkedin_url?: string | null
          min_project_budget?: number | null
          phone?: string | null
          profile_completion?: number | null
          service_area_radius?: number | null
          sms_notifications?: boolean | null
          state?: string | null
          updated_at?: string | null
          user_type?: string
          website_url?: string | null
          years_experience?: number | null
          zip_code?: string | null
        }
        Update: {
          address?: string | null
          avatar_url?: string | null
          bio?: string | null
          business_license?: string | null
          business_name?: string | null
          city?: string | null
          country?: string | null
          created_at?: string | null
          email?: string
          email_notifications?: boolean | null
          facebook_url?: string | null
          full_name?: string | null
          hourly_rate?: number | null
          id?: string
          instagram_url?: string | null
          is_verified?: boolean | null
          last_active?: string | null
          linkedin_url?: string | null
          min_project_budget?: number | null
          phone?: string | null
          profile_completion?: number | null
          service_area_radius?: number | null
          sms_notifications?: boolean | null
          state?: string | null
          updated_at?: string | null
          user_type?: string
          website_url?: string | null
          years_experience?: number | null
          zip_code?: string | null
        }
        Relationships: []
      }
      review_votes: {
        Row: {
          created_at: string | null
          id: string
          is_helpful: boolean
          review_id: string
          voter_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_helpful: boolean
          review_id: string
          voter_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_helpful?: boolean
          review_id?: string
          voter_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "review_votes_review_id_fkey"
            columns: ["review_id"]
            isOneToOne: false
            referencedRelation: "reviews"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "review_votes_voter_id_fkey"
            columns: ["voter_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      reviews: {
        Row: {
          booking_id: string | null
          communication_rating: number | null
          content: string
          created_at: string | null
          helpful_votes: number | null
          id: string
          images: string[] | null
          is_featured: boolean | null
          is_verified: boolean | null
          listing_id: string
          owner_response: string | null
          owner_response_date: string | null
          quality_rating: number | null
          rating: number
          reported_count: number | null
          reviewer_id: string
          status: string | null
          timeliness_rating: number | null
          title: string | null
          updated_at: string | null
          value_rating: number | null
        }
        Insert: {
          booking_id?: string | null
          communication_rating?: number | null
          content: string
          created_at?: string | null
          helpful_votes?: number | null
          id?: string
          images?: string[] | null
          is_featured?: boolean | null
          is_verified?: boolean | null
          listing_id: string
          owner_response?: string | null
          owner_response_date?: string | null
          quality_rating?: number | null
          rating: number
          reported_count?: number | null
          reviewer_id: string
          status?: string | null
          timeliness_rating?: number | null
          title?: string | null
          updated_at?: string | null
          value_rating?: number | null
        }
        Update: {
          booking_id?: string | null
          communication_rating?: number | null
          content?: string
          created_at?: string | null
          helpful_votes?: number | null
          id?: string
          images?: string[] | null
          is_featured?: boolean | null
          is_verified?: boolean | null
          listing_id?: string
          owner_response?: string | null
          owner_response_date?: string | null
          quality_rating?: number | null
          rating?: number
          reported_count?: number | null
          reviewer_id?: string
          status?: string | null
          timeliness_rating?: number | null
          title?: string | null
          updated_at?: string | null
          value_rating?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "reviews_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "business_listings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_reviewer_id_fkey"
            columns: ["reviewer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_contractor_dashboard_stats: {
        Args: { contractor_user_id: string }
        Returns: {
          total_listings: number
          active_listings: number
          total_bookings: number
          pending_bookings: number
          completed_bookings: number
          total_reviews: number
          average_rating: number
          total_earnings: number
          this_month_bookings: number
          response_rate: number
        }[]
      }
      get_customer_dashboard_stats: {
        Args: { customer_user_id: string }
        Returns: {
          total_bookings: number
          pending_bookings: number
          completed_bookings: number
          cancelled_bookings: number
          total_spent: number
          active_projects: number
          reviews_written: number
          favorite_contractors: number
        }[]
      }
      get_featured_listings: {
        Args: { limit_count?: number }
        Returns: {
          listing_id: string
          title: string
          business_name: string
          category_name: string
          city: string
          state: string
          average_rating: number
          review_count: number
          hourly_rate: number
          featured_image_url: string
          is_verified: boolean
        }[]
      }
      get_listing_reviews: {
        Args: { listing_uuid: string; limit_count?: number }
        Returns: {
          review_id: string
          reviewer_name: string
          reviewer_avatar: string
          rating: number
          title: string
          content: string
          created_at: string
          owner_response: string
          helpful_votes: number
        }[]
      }
      get_popular_categories: {
        Args: { limit_count?: number }
        Returns: {
          category_id: string
          category_name: string
          category_slug: string
          category_icon: string
          listing_count: number
          avg_rating: number
        }[]
      }
      increment_listing_view_count: {
        Args: { listing_uuid: string }
        Returns: undefined
      }
      search_listings_by_location: {
        Args: {
          search_lat: number
          search_lng: number
          radius_miles?: number
          category_slug?: string
          min_rating?: number
          search_query?: string
        }
        Returns: {
          listing_id: string
          title: string
          business_name: string
          category_name: string
          distance_miles: number
          average_rating: number
          review_count: number
          city: string
          state: string
          hourly_rate: number
          is_verified: boolean
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const