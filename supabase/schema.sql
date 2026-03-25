-- supabase/schema.sql
-- Run this in your Supabase SQL Editor

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create tables
CREATE TABLE wines (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  producer TEXT,
  region TEXT,
  type TEXT,
  year TEXT,
  grapes TEXT,
  price_bottle DECIMAL(10, 2),
  price_glass DECIMAL(10, 2),
  description TEXT,
  tasting_notes TEXT,
  acidity INTEGER,
  body INTEGER,
  intensity INTEGER,
  temperature TEXT,
  decanting TEXT,
  image_url TEXT,
  active BOOLEAN DEFAULT true,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE dishes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  description TEXT,
  category TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE pairings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  wine_id UUID REFERENCES wines(id) ON DELETE CASCADE,
  dish_id UUID REFERENCES dishes(id) ON DELETE CASCADE,
  type TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(wine_id, dish_id)
);

CREATE TABLE admins (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'manager',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS Policies
ALTER TABLE wines ENABLE ROW LEVEL SECURITY;
ALTER TABLE dishes ENABLE ROW LEVEL SECURITY;
ALTER TABLE pairings ENABLE ROW LEVEL SECURITY;
ALTER TABLE admins ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access on wines" ON wines FOR SELECT USING (active = true);
CREATE POLICY "Allow public read access on dishes" ON dishes FOR SELECT USING (true);
CREATE POLICY "Allow public read access on pairings" ON pairings FOR SELECT USING (true);

CREATE POLICY "Allow admin full access on wines" ON wines FOR ALL USING (auth.uid() IN (SELECT id FROM admins));
CREATE POLICY "Allow admin full access on dishes" ON dishes FOR ALL USING (auth.uid() IN (SELECT id FROM admins));
CREATE POLICY "Allow admin full access on pairings" ON pairings FOR ALL USING (auth.uid() IN (SELECT id FROM admins));
CREATE POLICY "Allow admin full access on admins" ON admins FOR ALL USING (auth.uid() IN (SELECT id FROM admins WHERE role = 'admin'));

-- Storage
INSERT INTO storage.buckets (id, name, public) VALUES ('wine-labels', 'wine-labels', true);
CREATE POLICY "Allow public read access on wine-labels" ON storage.objects FOR SELECT USING (bucket_id = 'wine-labels');
CREATE POLICY "Allow admin full access on wine-labels" ON storage.objects FOR ALL USING (bucket_id = 'wine-labels' AND auth.uid() IN (SELECT id FROM admins));

-- Seed Data
INSERT INTO dishes (name, description, category) VALUES
('Sapateira Recheada', 'Sapateira fresca recheada com os melhores ingredientes.', 'Entradas'),
('Gambas al Ajillo', 'Gambas salteadas em azeite e alho.', 'Entradas'),
('Robalo Grelhado', 'Robalo fresco grelhado no carvão com acompanhamento.', 'Pratos Principais'),
('Bacalhau à Armazém', 'Bacalhau assado no forno com molho de tomate e cebola, gratinado com maionese.', 'Pratos Principais'),
('Crumble de Maçã', 'Crumble de maçã quente com gelado de baunilha.', 'Sobremesas');

INSERT INTO wines (name, producer, region, type, price_bottle, acidity, body, intensity, tasting_notes, description) VALUES
('Contacto', 'Anselmo Mendes', 'Vinhos Verdes', 'branco', 27.00, 4, 3, 4, 'Cítrico, Mineral, Fresco', 'Um Alvarinho clássico, com grande frescura e mineralidade, perfeito para pratos de marisco.'),
('Crasto Superior', 'Quinta do Crasto', 'Douro', 'branco', 34.00, 3, 4, 4, 'Fruta Branca, Madeira Suave, Complexo', 'Vinho branco encorpado do Douro Superior, com excelente volume de boca.'),
('Cartuxa', 'Fundação Eugénio de Almeida', 'Alentejo', 'tinto', 47.00, 3, 4, 4, 'Fruta Preta, Especiarias, Elegante', 'Um clássico alentejano, com taninos suaves e final longo.'),
('Miraval', 'Château Miraval', 'Provence', 'rosé', 53.00, 4, 2, 3, 'Frutos Vermelhos, Floral, Elegante', 'Um rosé icónico da Provence, delicado e muito fresco.');
