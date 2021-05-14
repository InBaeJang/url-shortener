-- CreateTable
CREATE TABLE inbader.url
(
  id TEXT NOT NULL,
  url_code TEXT NOT NULL,
  long_url TEXT NOT NULL,
  short_url TEXT NOT NULL,

  PRIMARY KEY (id)
);

-- CreateIndex
CREATE UNIQUE INDEX "url.url_code_unique" ON inbader.url(url_code);

-- CreateIndex
CREATE UNIQUE INDEX "url.long_url_unique" ON inbader.url(long_url);
