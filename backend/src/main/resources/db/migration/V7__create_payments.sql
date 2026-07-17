CREATE TYPE payment_status AS ENUM (
	'PENDING',
	'PAID',
	'FAILED',
	'CANCELED'
);

CREATE TABLE payments (
	id UUID PRIMARY KEY DEFAULT uuidv7(),
	amount DECIMAL(10,2) NOT NULL,
	status payment_status NOT NULL,
	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
