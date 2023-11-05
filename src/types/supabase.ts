export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      accounts: {
        Row: {
          balance: number | null
          currency: string | null
          id: string
          name: string | null
          user_id: string | null
        }
        Insert: {
          balance?: number | null
          currency?: string | null
          id?: string
          name?: string | null
          user_id?: string | null
        }
        Update: {
          balance?: number | null
          currency?: string | null
          id?: string
          name?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "accounts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      categories: {
        Row: {
          color: string | null
          id: string
          name: string | null
        }
        Insert: {
          color?: string | null
          id?: string
          name?: string | null
        }
        Update: {
          color?: string | null
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      currencies: {
        Row: {
          cerrency_name: string | null
          currency: string | null
          id: number
          symbol: string | null
        }
        Insert: {
          cerrency_name?: string | null
          currency?: string | null
          id?: number
          symbol?: string | null
        }
        Update: {
          cerrency_name?: string | null
          currency?: string | null
          id?: number
          symbol?: string | null
        }
        Relationships: []
      }
      transactions: {
        Row: {
          account_id: string | null
          amount: number
          category_id: string | null
          date: string
          description: string | null
          id: string
          name: string
          type: string
          user_id: string
        }
        Insert: {
          account_id?: string | null
          amount: number
          category_id?: string | null
          date?: string
          description?: string | null
          id?: string
          name: string
          type: string
          user_id?: string
        }
        Update: {
          account_id?: string | null
          amount?: number
          category_id?: string | null
          date?: string
          description?: string | null
          id?: string
          name?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "transactions_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
