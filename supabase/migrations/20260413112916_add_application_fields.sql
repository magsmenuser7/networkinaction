/*
  # Add enhanced application fields to membership_applications

  ## Changes
  - Adds `industry` column for applicant's business sector
  - Adds `revenue_range` column for annual revenue bracket
  - Adds `years_in_business` column for business tenure
  - Adds `intent` column for short-answer why they want access

  ## Purpose
  These fields align with the psychological filtering approach:
  serious applicants qualify themselves through the detail they provide.
  The form now captures richer data to vet quality of applicants.
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'membership_applications' AND column_name = 'industry'
  ) THEN
    ALTER TABLE membership_applications ADD COLUMN industry text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'membership_applications' AND column_name = 'revenue_range'
  ) THEN
    ALTER TABLE membership_applications ADD COLUMN revenue_range text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'membership_applications' AND column_name = 'years_in_business'
  ) THEN
    ALTER TABLE membership_applications ADD COLUMN years_in_business text;
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'membership_applications' AND column_name = 'intent'
  ) THEN
    ALTER TABLE membership_applications ADD COLUMN intent text;
  END IF;
END $$;
