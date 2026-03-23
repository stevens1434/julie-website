/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_EMAIL?: string;
  readonly PUBLIC_LINKEDIN_URL?: string;
  readonly PUBLIC_FORM_ENDPOINT?: string;
  readonly PUBLIC_BOOKING_URL?: string;
  readonly PUBLIC_CV_PDF_PATH?: string;
  readonly PUBLIC_HEADSHOT_PATH?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
