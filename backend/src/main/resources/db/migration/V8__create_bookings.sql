CREATE TYPE booking_status AS ENUM (
	'PENDING',
	'CONFIRMED',
	'CANCELED',
	'COMPLETED'
);

CREATE TABLE bookings (
	id UUID PRIMARY KEY DEFAULT uuidv7(),
	user_id UUID NOT NULL REFERENCES users(id),
	apartment_id UUID NOT NULL REFERENCES apartments(id),
	check_in DATE NOT NULL,
	check_out DATE NOT NULL,
	guests INT NOT NULL CHECK (guests > 0),
	status booking_status NOT NULL,
	created_at TIMESTAMPTZ DEFAULT NOW(),
	updated_at TIMESTAMPTZ DEFAULT NOW(),

	CHECK (check_out > check_in)
);