-- Table: public.register_table

-- DROP TABLE IF EXISTS public.register_table;

CREATE TABLE IF NOT EXISTS public.register_table
(
    email character varying COLLATE pg_catalog."default" NOT NULL,
    password character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT register_table_pkey PRIMARY KEY (email)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.register_table
    OWNER to postgres;


-- Table: public.user_table

-- DROP TABLE IF EXISTS public.user_table;

CREATE TABLE IF NOT EXISTS public.user_table
(
    firstname character varying COLLATE pg_catalog."default" NOT NULL,
    lastname character varying COLLATE pg_catalog."default" NOT NULL,
    address1 character varying COLLATE pg_catalog."default" NOT NULL,
    address2 character varying COLLATE pg_catalog."default",
    city character varying COLLATE pg_catalog."default" NOT NULL,
    state character varying COLLATE pg_catalog."default" NOT NULL,
    zipcode numeric NOT NULL,
    email character varying COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT user_table_email_fkey FOREIGN KEY (email)
        REFERENCES public.register_table (email) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.user_table
    OWNER to postgres;

-- Table: public.verification_table

-- DROP TABLE IF EXISTS public.verification_table;

CREATE TABLE IF NOT EXISTS public.verification_table
(
    email character varying COLLATE pg_catalog."default" NOT NULL,
    code numeric NOT NULL,
    CONSTRAINT verification_table_pkey PRIMARY KEY (email)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.verification_table
    OWNER to postgres;

-- Table: public.fuel_quote_history

-- DROP TABLE IF EXISTS public.fuel_quote_history;

CREATE TABLE IF NOT EXISTS public.fuel_quote_history
(
    gallons_requested double precision NOT NULL,
    delivery_address character varying COLLATE pg_catalog."default" NOT NULL,
    delivery_date date NOT NULL,
    suggested_price_per_gallon double precision NOT NULL,
    total_amount_due double precision NOT NULL,
    email character varying COLLATE pg_catalog."default" NOT NULL
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.fuel_quote_history
    OWNER to postgres;