-- Table: public.Event

-- DROP TABLE IF EXISTS public."Event";

CREATE TABLE IF NOT EXISTS public."Event"
(
    "Id" integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    "Name" text COLLATE pg_catalog."default" NOT NULL,
    "Attendees" text[] COLLATE pg_catalog."default",
    "LinkToPurchase" text COLLATE pg_catalog."default",
    "Date" date,
    CONSTRAINT "Event_pkey" PRIMARY KEY ("Name")
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Event"
    OWNER to {}; --Insert your username here