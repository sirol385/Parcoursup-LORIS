const entreprises = [
  { nom: "Brio'Gel", adresse: "3 Rue du Tonnelier, 85600 Montaigu-Vendée", email: "contact@briogel.com", telephone: "02 51 46 37 37", type: "Industrie agroalimentaire de pains et brioches", status: "Accepté ✅", commentaire: "Contrat CFA signé électroniquement le Mardi 28 Juillet 2026 à 10h30"},
  { nom: "CHD Vendée", adresse: "Boulevard Stéphane Moreau, 85000 La Roche-sur-Yon", email: "secretariat.drh@chd-vendee.fr", telephone: "02 51 44 61 61", type: "Centre Hospitalier Départemental de Vendée", status: "Refus ❌"},
  { nom: "IFPS de Vendée", adresse: "33 Rue du Maréchal Koenig, 85000 La Roche-sur-Yon", email: "ifsi@ifps-vendee.fr", telephone: "02 51 36 65 65", type: "Centre de formation en médecine", status: "Refus ❌"},
  { nom: "CH Mazurelle", adresse: "Rue d'Aubigny, 85000 La Roche-sur-Yon", email: "formation@ch-mazurelle.fr", telephone: "02 51 09 72 72", type: "Centre Hospitalier spécialisé en psychiatrie", status: "Refus ❌"},
  { nom: "Clinique St-Charles", adresse: "11 Boulevard René Levesque, 85016 La Roche-sur-Yon", email: "cliniquesaintcharles@sa3h.fr", telephone: "02 51 44 44 44", type: "Clinique privée", status: "Refus ❌"},
  { nom: "Restev", adresse: "Impasse Newton, 85000 La Roche-sur-Yon", email: "contact@restev.fr", telephone: "02 51 37 06 68", type: "Médecine et santé du travail ", status: "Refus ❌"},
  { nom: "CPAM 85", adresse: "61 Rue Alain, 85931 La Roche-sur-Yon", email: "formation.rh.cpam-laroche@assurance-maladie.fr", telephone: "02 51 44 16 19", type: "Caisse Primaire d'Assurance Maladie de la Vendée", status: "Refus ❌"},
  { nom: "Finances Publiques", adresse: "12 Rue du 93E Régiment d'infanterie, 85000 La Roche-sur-Yon", email: "ddfip85@dgfip.finances.gouv.fr", telephone: "08 09 40 14 01", type: "Services des impôts", status: "Candidature envoyée ⌛"},
  { nom: "Hôtel de ville de La Roche-sur-Yon", adresse: "Place du Théâtre, 85021 La Roche-sur-Yon", email: "stages.drh@larochesuryon.fr", telephone: "02 51 47 47 47", type: "Hôtel de Ville et d'Agglomération", status: "Refus ❌"},
  { nom: "Maison des communes de Vendée", adresse: "65 Rue Kepler, 85006 La Roche-sur-Yon", email: "maisondescommunes@cdg85.fr", telephone: "02 51 44 50 60", type: "Maison des communes", status: "Refus ❌"},
  { nom: "Conseil départemental de la Vendée", adresse: "40 Rue du Maréchal Foch, 85000 La Roche-sur-Yon", email: "drh@vendee.fr", telephone: "02 28 85 85 85", type: "Administration départementale de la Roche-sur-Yon", status: "Refus ❌", commentaire: "Candidature acceptée mais proposition refusée"},
  { nom: "Préfecture de la Vendée", adresse: "29 Rue Delille, 85000 La Roche-sur-Yon", email: "prefecture@vendee.gouv.fr", telephone: "02 51 36 70 85", type: "Administration du département", status: "Candidature envoyée ⌛"},
  { nom: "Vendée Habitat", adresse: "28 Rue Benjamin Franklin, 85002 La Roche-sur-Yon", email: "ressources-humaines@vendeehabitat.fr", telephone: "02 51 09 85 85", type: "Office public de l’habitat de Vendée", status: "Refus ❌"},
  { nom: "Vendée Eau", adresse: "57 Rue Paul-Émile Victor, 85000 La Roche-sur-Yon", email: "vendee-eau@vendee-eau.fr", telephone: "02 51 24 82 00", type: "Distribution d'eau potable en Vendée", status: "Refus ❌"},
  { nom: "Vendée Concept", adresse: "57 Rue Alexander Fleming, 85000 La Roche-sur-Yon", email: "rh@vendeeconcept.com", telephone: "02 51 37 46 79", type: "Fabricant d'équipements automatisés pour l'industrie", status: "Refus ❌"},
  { nom: "SDIS Vendée", adresse: "Les Oudairies, 85017 La Roche-sur-Yon", email: "accueil@sdis-vendee.fr", telephone: "02 51 45 10 10", type: "Sapeurs-pompiers de la Vendée", status: "Refus ❌"},
  { nom: "Groupe Atlantic", adresse: "44 Boulevard des États-Unis, 85000 La Roche-sur-Yon", email: "alepetit@groupe-atlantic.com", telephone: "02 51 44 34 34", type: "Solutions thermiques et climatiques", status: "Refus ❌"},
  { nom: "Gustave Rideau", adresse: "1 Route de Beautour, 85000 La Roche-sur-Yon", email: "recrutement@alu-rideau.fr", telephone: "02 77 41 10 10", type: "Fabricant de produits aluminium", status: "Refus ❌"},
  { nom: "Cavac Siège", adresse: "12 Boulevard Réaumur, 85000 La Roche-sur-Yon", email: "jc.paille@cavac.fr", telephone: "02 51 36 51 51", type: "Coopérative agricole", status: "Refus ❌"},
  { nom: "Maison de l'agriculture de la Vendée", adresse: "21 Boulevard Réaumur, 85013 La Roche-sur-Yon", email: "accueil-laroche@pl.chambagri.fr", telephone: "02 51 36 82 22", type: "Chambre d'agriculture de la Vendée", status: "Refus ❌"},
  { nom: "Cerfrance Vendée Siège", adresse: "15 Rue Jacques-Yves Cousteau, 85000 La Roche-sur-Yon", email: "contact@85.cerfrance.fr", telephone: "02 51 24 42 42", type: "Expert-comptable", status: "Refus ❌"},
  { nom: "Cerfrance Vendée", adresse: "9 Boulevard de l'Industrie, 85000 La Roche-sur-Yon", email: "contact@85.cerfrance.fr", telephone: "02 51 46 04 04", type: "Expert-comptable", status: "Refus ❌"},
  { nom: "Adecia", adresse: "5 Rue Paul Emile Victor, 85000 La Roche-sur-Yon", email: "adecialaroche@adecia.fr", telephone: "02 51 37 07 78", type: "Cabinet d’expertise comptable", status: "Refus ❌"},
  { nom: "Crédit Agricole",adresse: "Rue d'Aizenay, 85000 La Roche-sur-Yon", email: "sylvain.durand@ca-atlantique-vendee.fr", telephone: "02 40 30 55 55", type: "Banque", status: "Refus ❌"},
  { nom: "Crédit Mutuel Océan", adresse: "34 Rue Léandre Merlet, 85000 La Roche-sur-Yon", email: "cmo4094@creditmutuel.fr", telephone: "02 51 47 53 00", type: "Banque", status: "Refus ❌"},
  { nom: "Trivalis", adresse: "31 Rue de l'Atlantique, 85015 La Roche-sur-Yon", email: "contact@trivalis.fr", telephone: "02 51 45 14 51", type: "Service du traitement des déchets de la Vendée", status: "Refus ❌"},
  { nom: "La Poste PPDC", adresse: "6 Rue François Cevert, 85000 La Roche-sur-Yon", email: "service.recrutement@laposte.fr", telephone: "09 70 82 36 31", type: "Plateforme de Distribution du Courrier (PPDC)", status: "Refus ❌"},
  { nom: "Cocktail Vision", adresse: "172 Rue Roger Salengro, 85000 La Roche-sur-Yon", email: "accueil@cocktailvision.fr", telephone: "02 51 47 80 08", type: "Régie publicitaire", status: "Refus ❌"},
  { nom: "Agence Duret La Roche-sur-Yon", adresse: "152 Boulevard Aristide Briand, 85000 La Roche-sur-Yon", email: "laroche@agences-duret.fr", telephone: "02 52 09 72 74", type: "Agence immobilière de La Roche-sur-Yon", status: "Refus ❌"},
  { nom: "Arcade Cycles", adresse: "41 Rue Pierre Allut, 85000 La Roche-sur-Yon", email: "recrutement@arcadecycles.com", telephone: "02 51 44 51 51", type: "Vélos électriques et accessoires", status: "Refus ❌"},
  { nom: "Sofrilog", adresse: "12 Impasse des Ajoncs, 85000 La Roche-sur-Yon", email: "dircom@sofrilog.com", telephone: "02 51 47 98 58", type: "Logistique frigorifique", status: "Candidature envoyée ⌛"},
  { nom: "Sovetours", adresse: "105 Boulevard d'Angleterre, 85004 La Roche-sur-Yon", email: "sovetours@sovetours.fr", telephone: "02 51 62 31 66", type: "Transport de voyageurs", status: "Candidature envoyée ⌛"},
  { nom: "Impulsyon", adresse: "3 Galerie de l'Empire, 85000 La Roche-sur-Yon", email: "espace.impulsyon@ratpdev.com", telephone: "02 51 37 13 93", type: "Réseau de transport urbain Impulsyon", status: "Refus ❌"},
  { nom: "Leclerc", adresse: "Route de la Tranche sur Mer, 85000 La Roche-sur-Yon", email: "perrine.fort@larochesuryon.leclerc", telephone: "02 51 47 81 00", type: "Supermarché", status: "Refus ❌"},
  { nom: "Super U et Drive", adresse: "Boulevard Stéphane Moreau, 85000 La Roche-sur-Yon", email: "superu.larochesuryon@systeme-u.fr", telephone: "02 51 37 61 31", type: "Supermarché", status: "Refus ❌"},
  { nom: "Sepro Group", adresse: "88 Rue Henry Bessemer, 85000 La Roche-sur-Yon", email: "sepro@sepro-group.com", telephone: "02 51 45 46 00", type: "Robotique industrielle pour plasturgie", status: "Refus ❌"},
  { nom: "Groupe FBO", adresse: "163 Boulevard Louis Blanc, 85000 La Roche-sur-Yon", email: "contact@groupefbo.com", telephone: "02 51 34 24 66", type: "Partenaire vendéen en solutions informatiques", status: "Refus ❌"},
  { nom: "Groupe Adinfo", adresse: "6 Rue Jacques-Yves Cousteau, 85009 La Roche-sur-Yon", email: "contact@groupeadinfo.com", telephone: "02 51 43 50 00", type: "Solutions informatiques pour entreprises", status: "Refus ❌"},
  { nom: "Herweb Informatique", adresse: "28 Rue de Verdun, 85000 La Roche-sur-Yon", email: "valerie.hervouet@herweb-informatique.com", telephone: "02 51 24 14 70", type: "Solutions informatiques et sécurité électronique", status: "Candidature envoyée ⌛"},
  { nom: "Ouest Solutions Informatiques 85", adresse: "114 Rue du Maréchal Joffre, 85000 La Roche-sur-Yon", email: "contact@osi85.fr", telephone: "02 55 99 01 51", type: "Solutions informatiques adaptées", status: "Candidature envoyée ⌛"},
  { nom: "Chambre de Métiers et de l'Artisanat de la Vendée", adresse: "35 Rue Sarah Bernhardt, 85002 La Roche-sur-Yon", email: "contact85@cma-paysdelaloire.fr", telephone: "3006", type: "CMA Pays de la Loire - Délégation de la Vendée", status: "Refus ❌"},
  { nom: "BTP CFA Vendée", adresse: "23 Rond-Point du Coteau, 85000 La Roche-sur-Yon", email: "contact-85@btpcfa-pdl.com", telephone: "02 51 62 70 70", type: "Établissement des CFA et BTP des Pays de la Loire", status: "Refus ❌"},
  { nom: "Geodis", adresse: "Rue de Dion Bouton, 85000 La Roche-sur-Yon", email: "recrutement@geodis.com", telephone: "08 92 05 28 28", type: "Service d'expédition et de livraison", status: "Candidature envoyée ⌛"},
  { nom: "Leroy Merlin", adresse: "Rond-Point de Tournefou, 85000 La Roche-sur-Yon", email: "relationclient.larochesuryon@leroymerlin.fr", telephone: "02 51 08 02 10", type: "Magasin de bricolage", status: "Refus ❌"},
  { nom: "Interroll", adresse: "310 Rue du Clair Bocage, 85006 La Roche-sur-Yon", email: "dynamicstorage@interroll.com", telephone: "02 51 37 12 32", type: "Entreprise de métallurgie", status: "Refus ❌"},
  { nom: "Veolia", adresse: "18 Impasse Louis Mazetier, 85000 La Roche-sur-Yon", email: "contact@veolia.com", telephone: "02 51 40 00 00", type: "Agence de collecte", status: "Refus ❌"},
  { nom: "Groupe Blondel", adresse: "5 Route de Nantes, 85000 La Roche-sur-Yon", email: "contact@groupe-blondel.com", telephone: "02 52 56 61 65", type: "Service logistique et de transport", status: "Candidature envoyée ⌛"},
  { nom: "Hyper U Les Flaneries", adresse: "Route de Nantes, 85000 La Roche-sur-Yon", email: "hyperu.larochesuryon.services@systeme-u.fr", telephone: "02 51 44 51 60", type: "Hypermarché", status: "Candidature envoyée ⌛"},
  { nom: "Soriba", adresse: "1 Rue Watt, 85000 La Roche-sur-Yon", email: "soriba@soriba.fr", telephone: "02 51 93 23 01", type: "Constructeur de structures en béton", status: "Refus ❌"},
  { nom: "Chaussons Matériaux", adresse: "2 Rue Pierre-Gilles de Gennes, 85000 La Roche-sur-Yon", email: "contact@chausson.fr", telephone: "02 51 09 48 48", type: "Fabricant de matériaux de construction", status: "Refus ❌"},
  { nom: "Vendée Expansion", adresse: "33 Rue de l'Atlantique, 85005 La Roche-sur-Yon", email: "solutions-numeriques@vendee-expansion.fr", telephone: "02 51 44 90 00", type: "Ingénierie routière et autres projets", status: "Refus ❌"},
  { nom: "Decathlon", adresse: "15 Avenue Yitzhak Rabin, 85000 La Roche-sur-Yon", email: "serviceclientpro@decathlon.com", telephone: "02 51 47 87 88", type: "Magasin d'articles de sport", status: "Refus ❌"},
  { nom: "Heppner", adresse: "79 Rue Pierre Allut, 85000 La Roche-sur-Yon", email: "contact@heppner-group.com", telephone: "02 51 62 32 32", type: "Société de transport routier", status: "Candidature envoyée ⌛"},
  { nom: "Socopa", adresse: "7 D160, 85000 La Roche-sur-Yon", email: "recrutement.groupe@bigard.fr", telephone: "07 80 47 52 34", type: "Abatoir", status: "Refus ❌"},
  { nom: "Symta Pièces", adresse: "147 Boulevard de l'Industrie, 85000 La Roche-sur-Yon", email: "contact@symta.fr", telephone: "02 51 37 30 46", type: "Fournisseur de matériel agricole", status: "Refus ❌"},
  { nom: "Bio Habitat", adresse: "Rue Charles Tellier, 85036 La Roche-sur-Yon", email: "contact@mobilhome-biohabitat.com", telephone: "02 51 38 50 00", type: "Conception de mobil-homes", status: "Candidature envoyée ⌛"},
  { nom: "Cougnaud", adresse: "500 Rue du Clair-Bocage, 85000 Mouilleron-le-Captif", email: "romain.salle@cougnaud.com", telephone: "02 51 05 85 85", type: "Construction modulaire industrialisée", status: "Refus ❌"},
  { nom: "Lapeyre Industries", adresse: "177 Rue Jacques-Yves Cousteau, 85000 Mouilleron-le-Captif", email: "service.client@lapeyre.fr", telephone: "02 51 24 11 43", type: "Spécialiste de l'aménagement de la maison", status: "Candidature envoyée ⌛"},
  { nom: "Cavac", adresse: "113 Rue de la Croisée, 85000 Mouilleron-le-Captif", email: "cavac@cavac.fr", telephone: "02 51 05 90 90", type: "Coopérative agricole", status: "Refus ❌"},
  { nom: "Vendéspace", adresse: "Vendéspace Zone, 85000 Mouilleron-le-Captif", email: "vendespace@vendee.fr", telephone: "02 28 85 78 78", type: "Complexe sportif et culturel", status: "Refus ❌"},
  { nom: "Adapei-Aria de Vendée", adresse: "Route de Beaupuy, 85000 Mouilleron-le-Captif", email: "communication@adapei-aria.com", telephone: "02 51 44 97 00", type: "Organisme de soutien et de services aux personnes handicapées", status: "Refus ❌"},
  { nom: "OCI 85", adresse: "91 Rue Jacques Yves Cousteau, 85000 Mouilleron-le-Captif", email: "recrutement@oci.fr", telephone: "09 69 39 40 60", type: "Prestataire informatique pour les PME et ETI vendéennes", status: "Refus ❌"},
  { nom: "Teoplus", adresse: "248 Rue du Clair Bocage, 85000 Mouilleron-le-Captif", email: "candidatures@teoplus.com", telephone: "02 51 34 10 98", type: "Entreprise de métallurgie", status: "Refus ❌"},
  { nom: "Synappse", adresse: "330 Rue du Clair Bocage, 85000 Mouilleron-le-Captif", email: "contact@synappse.fr", telephone: "02 55 96 98 98", type: "Cabinter de conseil informatique pour les entreprises", status: "Refus ❌"},
  { nom: "Almeria", adresse: "117 Rue Jacques Yves Cousteau, 85000 Mouilleron-le-Captif", email: "contact@almeria.fr", telephone: "02 51 05 90 32", type: "Prestataire informatique pour les entreprises", status: "Candidature envoyée ⌛"},
  { nom: "Akena Vérandas", adresse: "31 Rue Eric Tabarly, 85170 Dompierre-sur-Yon", email: "contact@akena.com", telephone: "02 51 34 13 50", type: "Spécialiste dans les vérandas", status: "Refus ❌"},
  { nom: "SPBI Beneteau", adresse: "34 Rue Eric Tabarly, 85170 Dompierre-sur-Yon", email: "recrutements@beneteau-group.com", telephone: "02 51 31 78 10", type: "Constructeur de bateaux", status: "Candidature envoyée ⌛"},
  { nom: "Vendée TV", adresse: "13 Rue Thomas Edison, 85170 Dompierre-sur-Yon", email: "accueil@tvvendee.fr", telephone: "02 51 08 06 06", type: "Chaîne d'information locale", status: "Refus ❌"},
  { nom: "Augizeau Transports Exceptionnels", adresse: "Rue Jules Verne, 85170 Le Poiré-sur-Vie", email: "contact@augizeau-te.com", telephone: "02 51 44 85 00", type: "Société de transports exceptionnels", status: "Candidature envoyée ⌛"},
  { nom: "Serta Group", adresse: "29 Rue des Champs, 85170 Le Poiré-sur-Vie", email: "contact@serta-group.com", telephone: "02 51 45 91 00", type: "Solutions hydrauliques industrielles", status: "Candidature envoyée ⌛"},
  { nom: "Charpente Fournier", adresse: "16 Rue Ampère, 85170 Le Poiré-sur-Vie", email: "contact@charpentes-fournier.fr", telephone: "02 51 31 82 95", type: "Charpentier", status: "Candidature envoyée ⌛"},
  { nom: "Communauté de Communes Vie et Boulogne", adresse: "24 Rue des Landes, 85170 Le Poiré-sur-Vie", email: "accueil@vieetboulogne.fr", telephone: "02 51 31 60 09", type: "Communauté de communes du Poiré-sur-Vie", status: "Refus ❌"},
  { nom: "RCM", adresse: "La Flotterie, 85170 Le Poiré-sur-Vie", email: "", telephone: "02 52 59 55 00", type: "Holding pour concessions et marques automobiles", status: "Candidature envoyée ⌛"},
  { nom: "Groupe Dubreuil", adresse: "27 Rue Jacqueline Auriol, 85170 Bellevigny", email: "recrutement@groupedubreuil.com", telephone: "02 51 47 77 90", type: "Produits pétroliers et distribution", status: "Refus ❌"},
  { nom: "Codaf", adresse: "Le Petit Bourbon, 85170 Bellevigny", email: "contact@codaf.fr", telephone: "02 51 24 40 00", type: "Protection de l'eau et de l'environnement", status: "Candidature envoyée ⌛"},
  { nom: "Eurial", adresse: "Boulevard de l'Industrie, 85170 Bellevigny", email: "magasin.bellevigny@eurial.eu", telephone: "02 51 44 25 25", type: "Producteur agroalimentaire de produits laitiers", status: "Candidature envoyée ⌛"},
  { nom: "Mobil-Home Rideau", adresse: "10 Rue Pierre et Marie Curie, 85190 Venansault", email: "recrutement@mh-rideau.com", telephone: "02 51 07 38 02", type: "Fabricant de mobil-homes Siège", status: "Refus ❌"},
  { nom: "Europe Snacks", adresse: "Zone Industrielle Saint Denis Les Lucs, 85170 Saint-Denis-la-Chevasse", email: "rh@europesnacks.com", telephone: "02 51 31 24 97", type: "Industrie agroalimentaire de gâteaux apéritifs", status: "Refus ❌"},
  { nom: "Covap", adresse: "2 Rue André Ampère, 85130 La Chaize-le-Vicomte", email: "contact@covap.fr", telephone: "02 51 40 14 14", type: "Fournisseur pour les plombiers et électriciens", status: "Candidature envoyée ⌛"},
  { nom: "La Boulangère U7", adresse: "38 Rue Charles Tellier, 85130 La Chaize-le-Vicomte", email: "recrutement@laboulangere.com", telephone: "02 51 38 11 32", type: "Industrie agroalimentaire de brioches", status: "Candidature envoyée ⌛"},
  { nom: "Sachot", adresse: "16 Rue Jacques Moindreau, 85310 La Chaize-le-Vicomte", email: "contact@sachot-acces.fr", telephone: "02 51 40 11 26", type: "Service de maintenance d’ascenseurs", status: "Refus ❌"},
  { nom: "Hoffman", adresse: "57 Rue Archereau, 85480 Bournezeau", email: "contact@ciments-hoffmann.fr", telephone: "02 51 46 06 00", type: "Fabricant de ciment professionnel", status: "Candidature envoyée ⌛"},
  { nom: "Prolaser", adresse: "2 Impasse Johannes Gutenberg, 85430 La Boissière-des-Landes", email: "commercial@pro-laser.fr", telephone: "02 51 34 11 57", type: "Fournisseur pour l'industrie de l'impression", status: "Refus ❌"},
  { nom: "SRDI", adresse: "123 Route de l'Epinette, 85430 La Boissière-des-Landes", email: "recrutement@srdi.net", telephone: "02 51 08 98 92", type: "Grossiste en matériaux de construction", status: "Refus ❌"},
  { nom: "MJ Distribution", adresse: "12 Rue Blaise Pascal, 85430 Aubigny-les-Clouzeaux", email: "contact@ideelgroupe.com", telephone: "02 51 32 90 62", type: "Service logistique", status: "Candidature envoyée ⌛"},
  { nom: "Brangeon Transports", adresse: "Rue de la Tournerie, 85430 Aubigny", email: "recrutement@brangeon.fr", telephone: "02 41 72 11 55", type: "Entreprise de gestion des déchets", status: "Refus ❌"},
  { nom: "France Boissons", adresse: "12 Rue Pierre et Marie Curie, 85190 Aizenay", email: "contact-aizenay@france-boissons.fr", telephone: "05 57 77 54 61", type: "Distributeur de boissons", status: "Candidature envoyée ⌛"},
  { nom: "Océplast", adresse: "3 Rue Benjamin Franklin, 85190 Aizenay", email: "standard@oceplast.fr", telephone: "02 51 48 30 34", type: "Magasin de matériel pour clôtures", status: "Refus ❌"},
  { nom: "French Home - Gautier", adresse: "8 Route de Nantes, 85110 Chantonnay", email: "contact@gautier.fr", telephone: "02 51 48 56 10", type: "Fabricant de meubles sur-mesure", status: "Refus ❌"},
  { nom: "Rabaud", adresse: "Bellevue, 85110 Sainte-Cécile", email: "info@rabaud.com", telephone: "02 51 48 51 51", type: "Fabricant de machines agricoles", status: "Refus ❌"},
  { nom: "La Mie Caline", adresse: "52 Rue du Général de Gaulle, 85160 Saint-Jean-de-Monts", email: "contact@lamiecaline.com", telephone: "02 51 59 19 19", type: "Restauration rapide de pain et pâtisseries", status: "Refus ❌"},
  { nom: "La Fournée Dorée", adresse: "6 Rue de l'Océan, 85150 Les Achards", email: "contact@lafourneedoree.fr", telephone: "02 51 05 99 80", type: "Industrie agroalimentaire de pains et brioches", status: "Refus ❌"},
  { nom: "PRB", adresse: "16 Rue de la Tour, 85150 Les Achards", email: "contact@prb.fr", telephone: "02 51 98 10 10", type: "Fournisseur de matériaux de construction", status: "Refus ❌"},
  { nom: "La Belle Henriette", adresse: "14 Rue de la Camamine, 85150 Les Achards", email: "accueil@labellehenriette.fr", telephone: "02 51 98 14 14", type: "Industrie agroalimentaire de salades", status: "Candidature envoyée ⌛"},
  { nom: "Noxi Agencement", adresse: "1 Rue du Pont Rouge, 85150 Les Achards", email: "contact@noxi-agencement.fr", telephone: "02 51 22 67 65", type: "Agencement d'intérieur sur-mesure en Vendée", status: "Refus ❌"},
  { nom: "Modéal", adresse: "Rue de l'Océan, 85150 Les Achards", email: "contact@modeal.fr", telephone: "02 51 06 22 22", type: "Entreprise de construction", status: "Refus ❌"},
  { nom: "AMPM", adresse: "16 Rue de la Camamine, 85150 Les Achards", email: "contact@ampm-meca.fr", telephone: "02 51 94 76 38", type: "Mécanique générale", status: "Candidature envoyée ⌛"},
  { nom: "SMOM", adresse: "11 Rue de la Camamine, 85150 Les Achards", email: "sfretay@smomfr.eu", telephone: "02 51 94 78 76", type: "Fabricant de pièces pour véhicules", status: "Refus ❌"},
  { nom: "Communauté des communes du Pays des Achards", adresse: "2 Rue Michel Breton, 85150 Les Achards", email: "recrutement@cc-paysdesachards.fr", telephone: "02 51 05 94 49", type: "Communauté des communes", status: "Refus ❌"},
  { nom: "Atlanplast", adresse: "Rue de la Découverte, 85150 Les Achards", email: "contact@atlanplast.com", telephone: "02 51 21 47 93", type: "Fabricant de cabines de douches intégrales", status: "Refus ❌"},
  { nom: "Brétéché", adresse: "2 Rue de l'Océan, 85150 Les Achards", email: "contact@breteche.fr", telephone: "02 51 36 60 00", type: "Fournisseur de carburant", status: "Refus ❌"},
  { nom: "Vendée Grand Littoral", adresse: "5 Rue de l'Hôtel de Ville, 85440 Talmont-Saint-Hilaire", email: "contact@vendeegrandlittoral.fr", telephone: "02 51 20 72 07", type: "Communauté de communes de Talmont", status: "Refus ❌"},
  { nom: "CH Côte de Lumière", adresse: "4 Rue Jacques Monod, 85340 Les Sables-d'Olonne", email: "secretariatdrh@ch-cotedelumiere.fr", telephone: "02 51 21 85 85", type: "Centre Hospitalier", status: "Refus ❌"},
  { nom: "Mairie et Agglomération des Sables-d'Olonne", adresse: "21 Place du Poilu de France, 85100 Les Sables-d'Olonne", email: "rh.accueil@lsoagglo.fr", telephone: "02 51 23 16 00", type: "Ville des Sables-d'Olonne", status: "Refus ❌"},
  { nom: "Paso Traiteur", adresse: "1 Rue des Frères Lumière, 85340 Les Sables-d'Olonne", email: "commercial@paso-traiteur.com", telephone: "02 51 95 57 29", type: "Industrie agroalimentaire de produits traiteur", status: "Refus ❌"},
  { nom: "Nil Nettoyage", adresse: "Allée de la Meilleraie, 85340 Les Sables-d'Olonne", email: "contact@nil-nettoyage.com", telephone: "02 51 95 33 73", type: "Entreprise de nettoyage pour les professionnels", status: "Refus ❌"},
  { nom: "RM Nautisme", adresse: "12 Quai Philippe Jeantot, 85100 Les Sables-d'Olonne", email: "mlouveau@rmnautisme.fr", telephone: "02 51 21 62 33", type: "Électronique marine et systèmes embarqués", status: "Candidature envoyée ⌛"},
  { nom: "Team Y", adresse: "12 Quai Prouteau, 85100 Les Sables-d'Olonne", email: "stecy@team-y.fr", telephone: "02 53 07 22 70", type: "Société d'ingénierie informatique", status: "Refus ❌"},
  { nom: "Ocea", adresse: "Quai de la Cabaude, 85100 Les Sables-d'Olonne", email: "commercial@ocea.fr", telephone: "02 51 21 05 90", type: "Construction navale et de yatchs", status: "Refus ❌"},
  { nom: "Brioches Fonteneau L'Herbergement", adresse: "20 Rue Leonard de Vinci, 85260 L'Herbergement", email: "contact@brioches-fonteneau.com", telephone: "02 51 09 25 00", type: "Industrie agroalimentaire de brioches et pâtisseries", status: "Refus ❌"},
  { nom: "FM Logistic", adresse: "90 Rue Georges Clemenceau, 85260 L'Herbergement", email: "communication@fmlogistic.com", telephone: "02 51 08 06 50", type: "Service de logistique", status: "Candidature envoyée ⌛"},
  { nom: "VM Distribution", adresse: "Route de la Roche-sur-Yon, 85260 L'Herbergement", email: "brautureau@samse.fr", telephone: "02 51 08 08 08", type: "Fournisseur de matériaux de construction", status: "Candidature envoyée ⌛"},
  { nom: "Jefmag", adresse: "41 Boulevard des Marchandises, 85260 L'Herbergement", email: "contact@jefmag.fr", telephone: "02 51 42 86 72", type: "Fournisseur de matériaux de construction", status: "Candidature envoyée ⌛"},
  { nom: "Les Oeufs Geslin", adresse: "La Rousselerie, 85140 Chauché", email: "communication@geslin.fr", telephone: "02 51 41 40 45", type: "Industrie agroalimentaire d'oeufs", status: "Refus ❌"},
  { nom: "Havea", adresse: "Parc d'activités Vendée Sud Loire, 85600 Montaigu-Vendée", email: "accueil@havea.com", telephone: "02 51 09 86 71", type: "Laboratoire pharmaceutique", status: "Refus ❌"},
  { nom: "Coveto", adresse: "Avenue Louis Pasteur, 85607 Montaigu-Vendée", email: "coveto@coveto.fr", telephone: "02 51 48 80 85", type: "Fabricant de produits pharmaceutiques et vétérinaire", status: "Refus ❌"},
  { nom: "Sodebo", adresse: "1 Rue Bernard Palissy, 85600 Montaigu-Vendée", email: "talent@sodebo.fr", telephone: "02 51 43 03 03", type: "Industrie agroalimentaire de sandwichs et de plats", status: "Refus ❌"},
  { nom: "Laiterie de Montaigu", adresse: "Le Planty, 85600 Montaigu-Vendée", email: "lm@laiteriedemontaigu.com", telephone: "02 51 45 65 00", type: "Laiterie locale et industrielle", status: "Refus ❌"},
  { nom: "Ouest-Frais", adresse: "448 Rue des Valois, 85600 Montaigu-Vendée", email: "contact@ouestfrais.fr", telephone: "02 51 09 26 00", type: "Distributeur alimentaire", status: "Refus ❌"},
  { nom: "Brioches Fonteneau Boufféré", adresse: "172 Rue Marie Curie, 85260 Montaigu-Vendée", email: "recrutement@brioches-fonteneau.com", telephone: "02 51 09 25 00", type: "Industrie agroalimentaire de brioches et pâtisseries", status: "Refus ❌"},
  { nom: "Novatics", adresse: "7 Rue Sadi Carnot, 85600 Montaigu-Vendée", email: "info@novatics.com", telephone: "02 51 46 38 50", type: "Fabricant de machines industrielles", status: "Refus ❌"},
  { nom: "Ligier Group", adresse: "Parc Vendée Sud Loire, 85600 Montaigu-Vendée", email: "contact@ligiergroup.com", telephone: "04 70 58 83 83", type: "Fabricant de voitures sans permis", status: "Candidature envoyée ⌛"},
  { nom: "DB Schenker", adresse: "35 Rue Paul-Henri Goulet, 85607 Montaigu-Vendée", email: "schenker-france@dbschenker.com", telephone: "02 51 45 20 00", type: "Siège de l'entreprise de transport", status: "Candidature envoyée ⌛"},
  { nom: "Transports Derocq", adresse: "6 Rue Bernard Palissy, 85600 Montaigu-Vendée", email: "recrutement@transportsderocq.com", telephone: "02 51 46 32 83", type: "Entreprise de transport", status: "Refus ❌"},
  { nom: "Herige Industries", adresse: "10 Rue Augustin Fresnel, 85600 Montaigu-Vendée", email: "contact@herige-industries.fr", telephone: "02 51 08 08 20", type: "Fabrication de menuiseries et de béton prêt à l'emploi", status: "Refus ❌"},
  { nom: "Mairie de Montaigu-Vendée", adresse: "Place de l'Hôtel de Ville, 85600 Montaigu-Vendée", email: "dsitn@terresdemontaigu.fr", telephone: "02 51 09 21 21", type: "Ville de Montaigu-Vendée", status: "Refus ❌"},
  { nom: "Terres de Montaigu", adresse: "1 Rue Henri-Joyau, 85603 Montaigu-Vendée", email: "contact@terresdemontaigu.fr", telephone: "02 51 46 45 45", type: "Communauté d'agglomération de Montaigu-Vendée", status: "Refus ❌"},
  { nom: "Agence Duret Montaigu", adresse: "61 Rue Georges Clemenceau, 85600 Montaigu-Vendée", email: "montaigu@agences-duret.fr", telephone: "02 52 09 72 74", type: "Agence immobilière de Montaigu", status: "Refus ❌"},
  { nom: "Edycem", adresse: "3 Rue Nicolas Sadi Carnot, 85600 Montaigu-Vendée", email: "contact@edycem.fr", telephone: "02 51 38 56 80", type: "Fabricant de béton et de ciments professionnels", status: "Refus ❌"},
  { nom: "Envoliis", adresse: "8 Rue Augustin Fresnel, 85600 Montaigu-Vendée", email: "contact@envoliis.com", telephone: "02 51 43 51 53", type: "Infrastructure IT pour les entreprises", status: "Candidature envoyée ⌛"},
  { nom: "Group Defontaine", adresse: "Rue Saint-Eloi, 85530 La Bruffière", email: "info@defontaine.com", telephone: "02 51 45 94 94", type: "Fabricant de composants automobiles et mécaniques", status: "Candidature envoyée ⌛"},
  { nom: "Bovineo", adresse: "Le Margat, 85280 La Ferrière", email: "communication@cavac.fr", telephone: "02 51 48 46 46", type: "Coopérative agricole", status: "Candidature envoyée ⌛"},
  { nom: "VST", adresse: "6 Rue des Coopératives, 85280 La Ferrière", email: "rejoinsmacoop@vst.coop", telephone: "02 51 40 61 80", type: "Grossiste en matériel agricole", status: "Candidature envoyée ⌛"},
  { nom: "Thomas Brioche", adresse: "La Belle Entrée, 85140 Essarts-en-Bocage", email: "contact@briochesthomas.com", telephone: "02 51 62 85 85", type: "Industrie agroalimentaire de grandes brioches", status: "Refus ❌"},
  { nom: "La Boulangère & Co Siège", adresse: "1 Rue du Petit Bocage, 85140 Essarts-en-Bocage", email: "talent@laboulangere-co.fr", telephone: "02 51 31 05 25", type: "Industrie agroalimentaire de produits de boulangerie", status: "Refus ❌"},
  { nom: "JP Home 85", adresse: "1 Rue du Champ Renard, 85140 Essarts-en-Bocage", email: "jphome@perrenot.eu", telephone: "02 54 55 47 57", type: "Entreprise de livraison", status: "Candidature envoyée ⌛"},
  { nom: "Ouest Pièces Auto Logistique", adresse: "7 Rue de l'Arée, 85140 Essarts-en-Bocage", email: "marketing@ouest-pieces-auto.fr", telephone: "02 51 08 03 03", type: "Pièces auto et logistique", status: "Refus ❌"},
  { nom: "Tecauma", adresse: "7 Rue Gustave Eiffel, 85140 Essarts-en-Bocage", email: "standard@tecauma.fr", telephone: "02 51 48 45 45", type: "Expert en robotique et machines", status: "Refus ❌"},
  { nom: "Stef Transport", adresse: "2 Rue de l'Arée, 85140 Essarts-en-Bocage", email: "contact@stef.com", telephone: "02 51 62 98 80", type: "Service de transport", status: "Candidature envoyée ⌛"},
  { nom: "Louis Vuitton", adresse: "3 Rue de la Mongie, 85140 Essarts-en-Bocage", email: "info@jobs.louisvuitton.com", telephone: "02 51 48 48 10", type: "Fabricant de produits de luxe", status: "Candidature envoyée ⌛"},
  { nom: "Groupe Mousset", adresse: "Rue Nationale 160, 85140 Sainte-Florence", email: "contact@jetransporte.com", telephone: "02 51 66 01 13", type: "Transport et logistique", status: "Refus ❌"},
  { nom: "Piveteau Bois", adresse: "La Vallée, 85140 Sainte-Florence", email: "commercial@piveteau.com", telephone: "02 51 66 50 33", type: "Fabricant de produits en bois industriels", status: "Refus ❌", commentaire: "Candidature acceptée mais proposition refusée"},
  { nom: "Prodia Ouest", adresse: "Les Hauteurs, 85140 Sainte-Florence", email: "contact@prodia.fr", telephone: "02 51 66 13 76", type: "Alimentation animale", status: "Candidature envoyée ⌛"},
  { nom: "Mag Bois", adresse: "La Vallée, 85140 Sainte-Florence", email: "sainteflorence@magbois.com", telephone: "02 51 66 50 33", type: "Magasin de bois", status: "Candidature envoyée ⌛"},
  { nom: "Fidemeca", adresse: "2 Les Quatre Chemins de l'Oie, 85140 Sainte-Florence", email: "contact@fidemeca-berieau.com", telephone: "02 52 56 08 75", type: "Atelier d'usinage", status: "Refus ❌"},
  { nom: "Ernest Soulard", adresse: "1 Rue de l'Industrie, 85140 L'Oie", email: "boutique@soulard.fr", telephone: "02 51 66 08 58", type: "Spécialiste du canard et du foie gras", status: "Refus ❌", commentaire: "Candidature acceptée mais proposition refusée"},
  { nom: "Maître Coq", adresse: "1 Rue du Stade, 85250 Saint-Fulgent", email: "recrutement@ldc.fr", telephone: "02 51 44 24 24", type: "Industrie agroalimentaire de volaille et de poulet", status: "Refus ❌"},
  { nom: "Groupe Routhiau", adresse: "24 Avenue de la Métairie, 85250 Saint-Fulgent", email: "contact@groupe-routhiau.fr", telephone: "02 51 42 72 28", type: "Expert de la cuisson des viandes et volailles industrielles", status: "Candidature envoyée ⌛"},
  { nom: "Briand", adresse: "29 Avenue des Sables, 85501 Les Herbiers", email: "contact@groupebriand.fr", telephone: "02 51 91 03 73", type: "Fabricant de structures métalliques", status: "Refus ❌"},
  { nom: "K-Line", adresse: "24 Avenue des Sables, 85501 Les Herbiers", email: "k-line@k-line.fr", telephone: "08 01 80 38 03", type: "Fabricant de fenêtres et de portes en aluminium", status: "Refus ❌", commentaire: "Candidature acceptée mais proposition refusée"},
  { nom: "SPBI Chantiers Jeanneau", adresse: "32 Avenue des Sables, 85500 Les Herbiers", email: "communication@jeanneau.fr", telephone: "02 51 64 20 20", type: "Fabricant de bateaux sur-mesure", status: "Candidature envoyée ⌛"},
  { nom: "ID Logistics", adresse: "1 Avenue Henri Jeanneau, 85500 Les Herbiers", email: "contact@id-logistics.com", telephone: "02 51 57 88 80", type: "Solutions logistiques pour les entreprises", status: "Candidature envoyée ⌛"},
  { nom: "You Cuisines et Bains", adresse: "Zone Industrielle de la Guerche, 85505 Les Herbiers", email: "contact@you.fr", telephone: "02 51 91 03 57", type: "Fabricant de cuisine sur-mesure", status: "Refus ❌"},
  { nom: "General Transmissions", adresse: "2 Rue Johannes Gutenberg, 85500 Les Herbiers", email: "contact@generaltransmissions.com", telephone: "02 51 66 96 30", type: "Fournisseur d'équipements industriels", status: "Candidature envoyée ⌛"},
  { nom: "Mairie des Herbiers", adresse: "6 Rue du Tourniquet, 85500 Les Herbiers", email: "mairie@lesherbiers.fr", telephone: "02 51 91 07 67", type: "Ville des Herbiers", status: "Refus ❌"},
  { nom: "Pays des Herbiers", adresse: "6 Rue du Tourniquet, 85500 Les Herbiers", email: "info@cc-paysdesherbiers.fr", telephone: "02 51 66 82 27", type: "Communauté de communes des Herbiers", status: "Refus ❌"},
  { nom: "Mecapack", adresse: "8 Rue Johannes Gutenberg, 85500 Les Herbiers", email: "contact@mecapack.com", telephone: "02 51 57 07 94", type: "Fabricant de machines d'emballage", status: "Candidature envoyée ⌛"},
  { nom: "Ouest Boulangère", adresse: "10 Rue Olivier de Serres, 85500 Les Herbiers", email: "communication@laboulangere-co.fr", telephone: "02 51 64 99 00", type: "Fabricant de pains et de brioches", status: "Candidature envoyée ⌛"},
  { nom: "Prestige Yachts", adresse: "32 Avenue des Sables, 85500 Les Herbiers", email: "info@prestige-yachts.com", telephone: "02 51 64 20 20", type: "Vendeur de bateaux", status: "Refus ❌"},
  { nom: "Dachser", adresse: "1 Avenue de l'Europe, 85130 Chanverrie", email: "info.france@dachser.com", telephone: "02 51 66 54 10", type: "Société de logistique et de transport", status: "Candidature envoyée ⌛"},
  { nom: "Tôlerie Robin", adresse: "ZA Les Bacheliers, 85590 Les Epesses", email: "accueil@tolerie-robin.fr", telephone: "02 51 57 37 06", type: "Tôlerie industrielle", status: "Refus ❌"},
  { nom: "Puy du Fou", adresse: "Le Puy du Fou, 85590 Les Epesses", email: "recrutementpuyfolais@emploi.beetween.com", telephone: "02 51 57 66 66", type: "Parc d'attractions mondialement connu", status: "Candidature envoyée ⌛"},
  { nom: "Tronico", adresse: "26 Rue du Bocage, 85660 Saint-Philbert-de-Bouaine", email: "contact@tronico-agon.com", telephone: "02 51 41 91 35", type: "Concepteur de systèmes électroniques", status: "Refus ❌"},
  { nom: "Siège Fleury Michon", adresse: "25 Rue de la Baudrière, 85700 La Meilleraie-Tillay", email: "fleurymichon@fleurymichon.fr", telephone: "02 51 66 32 32", type: "Fabricant alimentaire", status: "Candidature envoyée ⌛"},];
const voeux = [
  { nom: "St-François-d’Assise", url: "https://www.stfrancoislaroche.fr/formations/centre-formation-apprentissage/bts-cybersecurite-informatique-et-reseaux-electronique-ciel/", lieu: "La Roche-sur-Yon", typeFormation: "BTS CIEL Option A", duree: "Formation en 2 ans", statut: "En alternance", prix: "0€ (apprenti)", resultat: "accepte"},
  { nom: "Fab'Academy", url: "https://www.fabacademy-pdl.fr/bts-services-informatiques-aux-organisations-option-solutions-dinfrastructure-systemes-et-reseaux", lieu: "La Roche-sur-Yon", typeFormation: "BTS SIO Option SISR", duree: "Formation en 2 ans", statut: "En alternance", prix: "0€ (apprenti)", resultat: "proposition_refuse"},
  { nom: "Notre-Dame-du-Roc", url: "https://lycee-ndduroc.com/le-campus/bts-services-informatiques-aux-organisations-cybersecurite/", lieu: "La Roche-sur-Yon", typeFormation: "BTS SIO Option SISR", duree: "Formation en 2 ans", statut: "En alternance", prix: "0€ (apprenti)", resultat: "proposition_refuse"},
  { nom: "Notre-Dame-du-Roc", url: "https://lycee-ndduroc.com/le-campus/bts-services-informatiques-aux-organisations-cybersecurite/", lieu: "La Roche-sur-Yon", typeFormation: "BTS SIO Option SISR", duree: "Formation en 2 ans", statut: "En formation initiale", prix: "1481€ par an", resultat: "proposition_refuse"},
  { nom: "De-Lattre-de-Tassigny", url: "https://de-lattre.paysdelaloire.e-lyco.fr/brevet-technicien-superieurbrevet-technicien-superieur/les-bts-proposes-par-le-lycee-jean-de-lattre-de-tassigny-14638/", lieu: "La Roche-sur-Yon", typeFormation: "BTS CIEL Option A", duree: "Formation en 2 ans", statut: "En formation initiale", prix: "0€ (public)", resultat: "candidature_refuse"},
  { nom: "St-Félix-la-Salle", url: "https://stfelixlasalle.fr/formation/bts-cybersecurite-informatique-reseaux-electronique-scolaire", lieu: "Nantes", typeFormation: "BTS CIEL Option A", duree: "Formation en 2 ans", statut: "En formation initiale", prix: "1980€ par an", resultat: "candidature_refuse"},
  { nom: "La-Joliverie", url: "https://www.la-joliverie.com/formations/bts-services-informatiques-aux-organisations-cybersecurite/", lieu: "Nantes", typeFormation: "BTS SIO Option SISR", duree: "Formation en 2 ans", statut: "En formation initiale", prix: "1925€ par an", resultat: "proposition_refuse"},
  { nom: "Nicolas-Appert", url: "https://appert.paysdelaloire.e-lyco.fr/nos-formations/la-filiere-sciences-et-technologies-de-lindustrie/snir-presentation/", lieu: "Nantes", typeFormation: "BTS CIEL Option A", duree: "Formation en 2 ans", statut: "En formation initiale", prix: "0€ (public)", resultat: "inconnu"},
  { nom: "St-Aubin-la-Salle", url: "https://www.staubinlasalle.fr/campus-enseignement-superieur/postbac/bts-cybersecurite/", lieu: "Angers", typeFormation: "BTS CIEL Option A", duree: "Formation en 2 ans", statut: "En formation initiale", prix: "1657€ par an", resultat: "proposition_refuse"},
  { nom: "Léonce-Vieljeux", url: "https://lycee-vieljeux.fr/pf/ciel/", lieu: "La Rochelle", typeFormation: "BTS CIEL Option A", duree: "Formation en 2 ans", statut: "En formation initiale", prix: "0€ (public)", resultat: "candidature_refuse"},
  { nom: "Fenelon-Notre-Dame", url: "https://campus.fenelon-notredame.com/formations-diplomantes/bts-sio-services-informatiques-aux-organisations-option-sisr-solutions-d-infrastructure-systemes-et-reseaux-statut-scolaire-ou-alternance-ufa-sur-le-campus-fenelon-enseignement-superieur-de-la-rochell/?cat=13", lieu: "La Rochelle", typeFormation: "BTS SIO Option SISR", duree: "Formation en 2 ans", statut: "En formation initiale", prix: "1525€ par an", resultat: "proposition_refuse"},
  { nom: "St-Gab", url: "https://www.saint-gab.com/enseignement-superieur/les-formations/bts-ciel-ir/", lieu: "St-Laurent-sur-Sèvre", typeFormation: "BTS CIEL + licence", duree: "Formation en 3 ans", statut: "En formation initiale", prix: "8975€ par an", resultat: "voeu_archive"}];
const entretiens = [
  { entreprise: "Brio'Gel - Montaigu-Vendée", date: "Mardi 24 Février 2026", type: "Entretien en présentiel de 30 minutes", poste: "Alternant Informatique Réseaux ; Assister le technicien informatique dans ses missions quotidiennes et réaliser son projet dans le cadre de la scolarité (déploiements d'images ISO, inventaire du parc informatique etc.)", description: "300 Utilisateurs sur Montaigu, Bournezeau, la Châtaigneraie et Aizenay. 1 responsable de la Transformation Informatique, 1 technicien informatique et Réseaux, 1 développeur logiciels. Tickets via GLPI. Bonne ambiance : très important. 2 salles serveurs à Montaigu (siège). 35h/semaine. 9h00-17h00 dont 1h de pause-déjeuner."},
  { entreprise: "K-Line - Les Herbiers", date: "Jeudi 16 Avril 2026", type: "Entretien en présentiel de 40 minutes", poste: "Alternant Centre des Services ; Support utilisateurs de niveau 1 et 2. Gestion des tickets (mail, GLPI ou téléphone), configuration des postes pour les nouveaux arrivants, installation et maintenance de nouveaux postes, maintien des salles de réunions et de la téléphonie et des imprimantes, gestion des accès des comptes sur l'AD.", description: "500 Utilisateurs sur les Herbiers. 450 ordinateurs et 800 téléphones. 4 techniciens Centre de Services. Tickets via GLPI. Divisé en plusieurs secteurs sur les Herbiers. 39h/semaine dont rémunérées. 8h30-18h00 dont 1h30 de pause-déjeuner."},
  { entreprise: "Mairie et Agglomération des Sables-d'Olonne - Château-d'Olonne", date: "Lundi 20 Avril 2026", type: "Entretien en présentiel de 20 minutes", poste: "Alternant Gestionnaire de la plateforme des démarches en ligne ; Contribuer au développement et à la promotion des démarches en ligne, développer des applications métiers en partenariat avec les services de la collectivité, analyser les besoins des services, respect des règles RPPD avec la DSI.", description: "48 400 habitants sur l'agglomération des Sables-d'Olonne. 1 directrice des relations à l'usager, 1 responsable emplois et compétences. 39h/semaine dont rémunérées. 8h30-17h20 dont 1h de pause-déjeuner."},
  { entreprise: "Ernest Soulard - L'Oie", date: "Vendredi 24 Avril 2026", type: "Entretien en présentiel de 35 minutes", poste: "Alternant Technicien Réseau et Informatique, Développeur, Applications ; Pour développer des applications, gérer ses accès si besoin, réparer des problèmes réseaux ou informatique, maintenance des équipements connectés en IP.", description: "350 Utilisateurs sur l'Oie. 150 Ordinateurs. 1 responsable informatique, 3 personnes dev/technicien etc. 35h/semaine. 9h00-17h00 dont 1h de pause-déjeuner."},
  { entreprise: "SDIS Vendée - La Roche-sur-Yon", date: "Mercredi 06 Mai 2026", type: "Entretien en présentiel de 25 minutes", poste: "Alternant Infrastructures et Télécommunications, Gestion des réseaux de communications et du parc informatique", description: "76 Postes de secours sur la Vendée. 35h/semaine. 9h00-17h00 dont 1h de pause-déjeuner."},
  { entreprise: "K-Line - Les Herbiers", date: "Mardi 26 Mai 2026", type: "Entretien par Teams de 25 minutes", poste: "Alternant Centre des Services ; Support utilisateurs de niveau 1 et 2. Gestion des tickets (mail, GLPI ou téléphone), configuration des postes pour les nouveaux arrivants, installation et maintenance de nouveaux postes, maintien des salles de réunions et de la téléphonie et des imprimantes, gestion des accès des comptes sur l'AD.", description: "500 Utilisateurs sur les Herbiers. 450 ordinateurs et 800 téléphones. 4 techniciens Centre de Services. Tickets via GLPI. Divisé en plusieurs secteurs sur les Herbiers. 39h/semaine dont rémunérées. 8h30-18h00 dont 1h30 de pause-déjeuner."},
  { entreprise: "Brio'Gel - Montaigu-Vendée", date: "Lundi 01 Juin 2026", type: "Entretien en présentiel de 15 minutes", poste: "Alternant Informatique Réseaux ; 80% de support informatique et 20% du projet (déploiement d'images OS, gestion du parc informatique...)", description: "300 Utilisateurs sur Montaigu, Bournezeau, la Châtaigneraie et Aizenay. 1 responsable de la Transformation Informatique, 1 technicien informatique et Réseaux, 1 développeur logiciels. Tickets via GLPI. Bonne ambiance : très important. 2 salles serveurs à Montaigu (siège). 35h/semaine. 8h30-17h30 dont 1h30 de pause-déjeuner."},];
function normaliser(str) {
  return str.toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "");
}
function filtrerEntreprises(val) {
  const v = normaliser(val);
  document.querySelectorAll("#liste-entreprises li").forEach(li => {
    li.style.display = normaliser(li.dataset.nom).includes(v) ? "" : "none";
  });
  rechercheClear.style.display = val.length > 0 ? "block" : "none";
}
function calculerStatistiques() {
  const stats = {
    total: entreprises.length,
    acceptee: 0,
    refusees: 0,
    enAttente: 0
  };
  entreprises.forEach(e => {
    if (e.status.includes("Accepté")) stats.acceptee++;
    else if (e.status.includes("Refus")) stats.refusees++;
    else if (e.status.includes("Candidature envoyée")) stats.enAttente++; {
      }
  });
  return stats;
}
const RESULTATS_VOEUX = {
  recherche_contrat: { label: "En recherche de contrat",  emoji: "🔍", couleur: "#3498db" },
  proposition_refuse:{ label: "Proposition refusée",      emoji: "❌", couleur: "#e74c3c" },
  candidature_refuse:{ label: "Candidature refusée",      emoji: "❌", couleur: "#e74c3c" },
  accepte:           { label: "Admis",                    emoji: "✅", couleur: "#2ecc71" },
  voeu_archive:      { label: "VOEU ARCHIVÉ",             emoji: "📦", couleur: "#f39c12" },};
const list = document.getElementById("liste-entreprises");
const fiche = document.getElementById("fiche");
const stats = calculerStatistiques();
const rechercheInput = document.getElementById("recherche-entreprise");
const rechercheClear = document.getElementById("recherche-clear");
const voeuxContainer = document.getElementById("voeux-container");
const entretiensContainer = document.getElementById("entretiens-container");
voeux.forEach(v => {
  const div = document.createElement("div");
  div.classList.add("postit");
  const res = RESULTATS_VOEUX[v.resultat] || { label: "Inconnu", emoji: "❓", couleur: "#999" };
  div.innerHTML =
    `<a href="${v.url}" target="_blank" class="link-nom"><strong>${v.nom}</strong></a><br>
📍 ${v.lieu}<br>
👨‍🎓 ${v.typeFormation}<br>
⏱️ ${v.duree}<br>
📕 ${v.statut}<br>
💶 ${v.prix}<br>
<span style="display:inline-block; margin-top:0.4rem; background:${res.couleur}; color:white; padding:0.2rem 0.7rem; border-radius:12px; font-size:0.9rem; font-weight:bold;">${res.emoji} ${res.label}</span>`;  voeuxContainer.appendChild(div);
});
rechercheInput.addEventListener("input", function () {
  filtrerEntreprises(this.value);
});
rechercheClear.addEventListener("click", function () {
  rechercheInput.value = "";
  filtrerEntreprises("");
  rechercheInput.focus();
});
if (entretiens.length === 0) {
  entretiensContainer.innerHTML = "<p style='color:#888'>Aucun entretien noté pour l'instant.</p>";
} else {
entretiens.forEach(e => {
    const div = document.createElement("div");
    div.classList.add("entretien-card");
    div.innerHTML = `
      <strong>🏢 ${e.entreprise}</strong><br>
      📅 <u>Date</u> : ${e.date}<br>
      🎯 <u>Type</u> : ${e.type}<br>
      💼 <u>Poste</u> : ${e.poste}<br>
      📝 <u>Description</u> : ${e.description}<br>
    `;
    entretiensContainer.appendChild(div);
});
}
const buttons = document.querySelectorAll("nav button[data-tab]");
const sections = document.querySelectorAll(".tab");
const entreprisesValides = entreprises.filter(e => e.nom && e.nom.trim() !== "");
const compteur = document.getElementById("compteur-entreprises");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const tab = btn.dataset.tab;
    sections.forEach(sec => sec.classList.remove("active"));
    document.getElementById(tab).classList.add("active");
  });
});
compteur.textContent = `${entreprisesValides.length}`;
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
fiche.innerHTML = `
<div style="color: #000000; font-size: 1.2rem; text-align: center; margin-bottom: 1rem;">
  ☑️ Sélectionne une entreprise
</div>
<div style="display: flex; gap: 0.5rem; flex-wrap: wrap; padding-top: 0.5rem;">
  <div style="background: #2ecc71; color: white; padding: 1.2rem 1.5rem; border-radius: 8px; text-align: center; flex: 1; min-width: 100px;">
    <div style="font-size: 1.9rem; font-weight: bold;">${stats.acceptee}</div>
    <div style="font-size: 1rem;">Acceptée ✅</div>
  </div>
  <div style="background: #e74c3c; color: white; padding: 1.2rem 1.5rem; border-radius: 8px; text-align: center; flex: 1; min-width: 100px;">
    <div style="font-size: 1.9rem; font-weight: bold;">${stats.refusees}</div>
    <div style="font-size: 1rem;">Refusées ❌</div>
  </div>
  <div style="background: #f39c12; color: white; padding: 1.2rem 1.5rem; border-radius: 8px; text-align: center; flex: 1; min-width: 100px;">
    <div style="font-size: 1.9rem; font-weight: bold;">${stats.enAttente}</div>
    <div style="font-size: 1rem;">En attente ⌛</div>
  </div>
</div> <!-- Supprimez ce div pour "À contacter 📬" -->
`;
entreprises.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item.nom;
  li.dataset.nom = item.nom.toLowerCase();
  li.addEventListener("click", () => {
    fiche.innerHTML =
      `<div style="padding-bottom: 0.8rem; margin-top: -0.5rem;">
  <strong>🏢 ${item.nom}</strong><br>
  📍 Adresse : ${item.adresse}<br>
  📧 Email : ${item.email}<br>
  📞 Téléphone : ${item.telephone}<br>
  🧩 Type : ${item.type}<br>
  📌 Statut : ${item.status}${item.commentaire ? 
  `<br>💬 ${item.commentaire}` : ""}
</div>
</div>
<div style="display: flex; gap: 0.4rem; flex-wrap: wrap;">
  <div style="background: #2ecc71; color: white; padding: 1.2rem 1.5rem; border-radius: 6px; text-align: center; flex: 1; min-width: 75px; line-height: 1.1;">
    <div style="font-size: 1.7rem; font-weight: bold;">${stats.acceptee}</div>
    <div style="font-size: 0.9rem;">Acceptée ✅</div>
  </div>
  <div style="background: #e74c3c; color: white; padding: 1.2rem 1.5rem; border-radius: 6px; text-align: center; flex: 1; min-width: 75px; line-height: 1.1;">
    <div style="font-size: 1.7rem; font-weight: bold;">${stats.refusees}</div>
    <div style="font-size: 0.9rem;">Refusées ❌</div>
  </div>
  <div style="background: #f39c12; color: white; padding: 1.2rem 1.5rem; border-radius: 6px; text-align: center; flex: 1; min-width: 75px; line-height: 1.1;">
    <div style="font-size: 1.7rem; font-weight: bold;">${stats.enAttente}</div>
    <div style="font-size: 0.9rem;">En attente ⌛</div>
  </div>
</div>`;
  });
  list.appendChild(li);
});
  let _triggerEl = null, _trapHandler = null;
  window.openModal = function() {
    const modal = document.getElementById('mentionsModal');
    _triggerEl = document.activeElement;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => modal.classList.add('show'));
    document.querySelectorAll('body > *').forEach(el => {
      if (el !== modal && !el.contains(modal)) { el.setAttribute('inert', ''); el.setAttribute('data-was-inert', ''); }
    });
    _trapHandler = function(e) { if (e.key === 'Tab') e.preventDefault(); };
    document.addEventListener('keydown', _trapHandler);
  }
  window.closeModal = function() {
    const modal = document.getElementById('mentionsModal');
    if (_trapHandler) { document.removeEventListener('keydown', _trapHandler); _trapHandler = null; }
    document.querySelectorAll('[data-was-inert]').forEach(el => { el.removeAttribute('inert'); el.removeAttribute('data-was-inert'); });
    modal.classList.remove('show');
    document.body.style.overflow = '';
    setTimeout(() => modal.style.display = 'none', 100);
    if (_triggerEl && typeof _triggerEl.focus === 'function') { _triggerEl.focus(); _triggerEl = null; }
  }
  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('mentionsModal');
    if (e.key === 'Escape' && modal.classList.contains('show')) closeModal();
  });
document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    document.documentElement.classList.add("page-loaded");
  });
});