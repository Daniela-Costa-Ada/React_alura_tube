import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://munzauqkkrspfolipuyq.supabase.co";
const PUBLICKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im11bnphdXFra3JzcGZvbGlwdXlxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyODAwODAsImV4cCI6MTk4Mzg1NjA4MH0.BiM1R1AkiT0K1MDJjCfGPMiml6KBsKDFTcTo08tIRn4"
const supabase = createClient(PROJECT_URL, PUBLICKEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
            }
    }
}