-- SQLite
CREATE TABLE Deposit(
DepositId integer NOT NULL,
GmachId text,
Amount integer,
Type text,
Date text,
Payment_method text,
FundId NOT NULL,
UserId NOT NULL
);