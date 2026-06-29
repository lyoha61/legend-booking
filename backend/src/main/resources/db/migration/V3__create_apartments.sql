CREATE TABLE apartments (
	id UUID PRIMARY KEY DEFAULT uuidv7(),

	owner_id UUID NOT NULL REFERENCES owners(id),

	name VARCHAR(255),

	number VARCHAR(50) NOT NULL,
	floor INT NOT NULL,

	area_sqm NUMERIC(6,2) NOT NULL,
	max_guests INT NOT NULL,
	rooms_count INT NOT NULL,

	price_per_night NUMERIC(10,2) NOT NULL,

	created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
	updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
)
