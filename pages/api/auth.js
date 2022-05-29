import { supabase } from "../../lib/supabase/supabaseClient";

export default function handler(req, res) {
    supabase.auth.api.setAuthCookie(req, res)
}