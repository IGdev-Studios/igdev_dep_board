

var dictStops = [["GEN120TOISE","Le Pont-de-Claix, 120 Toises"],
["GEN16AOUT44","Saint-Martin-le-Vinoux, Résistance"],
["GEN8MAI1945","Saint-Martin-d'Hères, 8 mai 1945"],
["GENABBEGREG","Grenoble, Abbé Grégoire"],
["GENADELAUNE","Échirolles, Auguste Delaune"],
["GENAIGUIHEX","Meylan, Aiguinards-Hexagone"],
["GENALB1BELG","Grenoble, Albert 1er de Belgique"],
["GENALBERGES","Vaulnaveys-le-Haut, Les Alberges"],
["GENALEGRANG","Vif, Allée des Granges"],
["GENALEMBERT","Grenoble, D'Alembert"],
["GENALLIANCE","Vizille, L'Alliance"],
["GENALLIES","Grenoble, Alliés"],
["GENALLOVES","Saint-Martin-d'Hères, Les Alloves"],
["GENALPEXPO","Eybens, Alpexpo"],
["GENALSACELO","Grenoble, Alsace-Lorraine"],
["GENANATFRAN","Grenoble, Anatole France"],
["GENANCIEMAI","Fontaine, Ancienne Mairie"],
["GENANCIGARE","Seyssins, Ancienne Gare"],
["GENANCMAIRI","Meylan, Ancienne Mairie"],
["GENANGONNES","Brié-et-Angonnes, Les Angonnes"],
["GENANGUISSE","Saint-Martin-d'Hères, Anguisses"],
["GENANMAL","Jarrie, Clos Jouvin"],
["GENARAGO","Grenoble, Arago"],
["GENARBERGES","Seyssinet-Pariset, Aristide Bergès"],
["GENARGOUD","Seyssins, L'Argoud"],
["GENARGOUGES","Grenoble, André Argouges"],
["GENARLEQUIN","Grenoble, Arlequin"],
["GENARNAUDS","Domène, Les Arnauds"],
["GENARZELIER","Le Gua, L'Arzelier"],
["GENAUGUFERR","Échirolles, Auguste Ferrier"],
["GENAUGURAVI","Grenoble, Auguste Ravier"],
["GENAVREPUB","Bresson, Avenue de la République"],
["GENBACHELAR","Grenoble, Bachelard"],
["GENBAJATIER","Grenoble, Bajatière"],
["GENBALMETTE","Claix, La Balmette"],
["GENBALZAZ","Varces-Allières-et-Risset, Balzac"],
["GENBANCHARD","Saint-Martin-le-Vinoux, La Banchardière"],
["GENBARBET","Quaix-en-Chartreuse, Le Barbet"],
["GENBARNA","Saint-Égrève, Collège Barnave"],
["GENBASCULE","Saint-Paul-de-Varces, La Bascule"],
["GENBASMONT","Quaix-en-Chartreuse, Bas de Mont-Quaix"],
["GENBASPET","Quaix-en-Chartreuse, Bas de Petesset"],
["GENBASQUAIX","Quaix-en-Chartreuse, Le Bas de Quaix"],
["GENBASTILLE","La Tronche, Bastille"],
["GENBAUCHES","Claix, Les Bauches"],
["GENBAYANNE","Miribel-Lanchâtre, Bayanne"],
["GENBAYARD","Échirolles, Bayard"],
["GENBEALIERE","Meylan, Les Béalières"],
["GENBEAU","Claix, Beau Dunois"],
["GENBEAUDONI","Montbonnot-Saint-Martin, Baudonniere"],
["GENBEAULIEU","Brié-et-Angonnes, Beaulieu"],
["GENBEAUREVO","Sassenage, Beaurevoir"],
["GENBEAUSITE","Seyssinet-Pariset, Beau Site"],
["GENBEAUVERT","Grenoble, Beauvert"],
["GENBEAUVOIR","Seyssins, Beauvoir"],
["GENBELAIR","Eybens, Bel Air"],
["GENBELLEDON","Saint-Égrève, Belledonne"],
["GENBELLEVU","Saint-Égrève, Bellevue"],
["GENBELLEVUE","Claix, Bellevue"],
["GENBELVEDER","Seyssinet-Pariset, Belvédère"],
["GENBERGVERC","Seyssinet-Pariset, Bergès - Vercors"],
["GENBERIVIER","Meylan, Bérivière"],
["GENBERLIOGN","Varces-Allières-et-Risset, Berliognière"],
["GENBERRIAT","Grenoble, Berriat-Le Magasin"],
["GENBERULLE","Grenoble, Place de Bérulle"],
["GENBERYL","Veurey-Voroize, Le Béryl"],
["GENBIBLIUNI","Gières, Bibliothèques Universitaires"],
["GENBIOLLE","Saint-Égrève, La Biolle - Gare"],
["GENBIOLOGIE","Gières, Universités - Biologie"],
["GENBIRHAKEI","Grenoble, Bir Hakeim"],
["GENBLANCFON","Sassenage, Blanc Fontaine"],
["GENBLANCHON","Saint-Martin-d'Hères, Parc Jo Blanchon"],
["GENBONNAIS","Saint-Égrève, Les Bonnais"],
["GENBONPASTE","Grenoble, Bon Pasteur"],
["GENBOUCHDV","Seyssinet-Pariset, Bouchayer - Hôtel de Ville"],
["GENBOULODRO","Claix, Boulodrome-Ecole"],
["GENBOURG","Murianette, Le Bourg"],
["GENBOURNET","Seyssins, Le Bournet"],
["GENBRESSON","Bresson, Bresson Mairie"],
["GENBRIE","Brié-et-Angonnes, Mont Rolland"],
["GENBRIECOLE","Brié-et-Angonnes, L'Olympe"],
["GENBRIEGLIS","Brié-et-Angonnes, Eglise"],
["GENBRIOT","Murianette, La Briot"],
["GENBRUYERE","Grenoble, La Bruyère-Parc Jean Verlhac"],
["GENBUCLOS","Corenc, Buclos"],
["GENBUIS","Saint-Martin-le-Vinoux, La Buisseratière"],
["GENBUSSEROL","Meylan, Busserolles"],
["GENCAB","Grenoble, Colonel Dumont"],
["GENCAMPVIZ","Vizille, Camping"],
["GENCAP38","Saint-Égrève, CAP 38"],
["GENCAPDESH","Saint-Égrève, Cap des H'"],
["GENCAPUCHE","Grenoble, Capuche"],
["GENCARINA","Saint-Martin-d'Hères, Le Carina"],
["GENCARONBAS","La Tronche, La Carronnerie Basse"],
["GENCARONRIE","La Tronche, Carronnerie - Ile d'Amour"],
["GENCARRIERE","Claix, Carrière"],
["GENCASANOVA","Échirolles, Danielle Casanova"],
["GENCASAVILL","Grenoble, Casamaures - Village"],
["GENCASBONNE","Grenoble, Caserne de Bonne"],
["GENCASSOULE","Miribel-Lanchâtre, Cassoulet"],
["GENCEACAMB","Grenoble, Marie-Louise Paris - CEA"],
["GENCEDRE","Corenc, Le Cèdre"],
["GENCEMOI","Grenoble, Cémoi"],
["GENCENSOCIO","Poisat, Centre Socio-Culturel"],
["GENCENTHEOL","La Tronche, Centre Théologique"],
["GENCENTRAER","Quaix-en-Chartreuse, Centre Aéré"],
["GENCENTRESU","Seyssins, Grand Pré - Centre Sud"],
["GENCENTRSOC","Seyssinet-Pariset, L'Arche"],
["GENCHABER","Jarrie, Les Chaberts"],
["GENCHALET","Vif, Le Chalet"],
["GENCHAMBORD","Varces-Allières-et-Risset, Chambord"],
["GENCHAMECHA","Sassenage, Chamechaude"],
["GENCHAMP","Montchaboud, Champ Clocher"],
["GENCHAMPFIL","Eybens, Champ Fila"],
["GENCHAMPION","Grenoble, Championnet"],
["GENCHAMPLAR","Meylan, Champlars"],
["GENCHAMPROM","Saint-Martin-d'Hères, Champ Roman"],
["GENCHAMPRON","Gières, Champrondet"],
["GENCHAMPSD","Champ-sur-Drac, ZA La Plaine"],
["GENCHAMPSEL","Grenoble, Champs-Elysées"],
["GENCHAMPY","Saint-Égrève, Champy"],
["GENCHAMROC","Meylan, Champ Rochas"],
["GENCHANDON","Le Pont-de-Claix, Edmée Chandon"],
["GENCHANTEFE","Vizille, Chantefeuille"],
["GENCHANTERA","Claix, La Chanteraie"],
["GENCHARBON","Jarrie, Les Charbonnaux"],
["GENCHARLMIC","Fontaine, Charles Michels"],
["GENCHARMETT","Fontaine, Charmettes"],
["GENCHARPEN","Quaix-en-Chartreuse, Le Charpen"],
["GENCHARRIER","Claix, Charrières"],
["GENCHAT","Vizille, Place du Château"],
["GENCHATBEAU","Sassenage, Château de Beaurevoir"],
["GENCHATEAU","Échirolles, Le Château"],
["GENCHATEAUQ","Quaix-en-Chartreuse, Le Château"],
["GENCHATEAUX","Veurey-Voroize, Chemin du Parc"],
["GENCHATELAR","Veurey-Voroize, Châtelard"],
["GENCHATELIE","Eybens, La Châtelière"],
["GENCHATSASS","Sassenage, Château de Sassenage"],
["GENCHAULNES","Noyarey, Chaulnes"],
["GENCHAUMES","Claix, Les Chaumes"],
["GENCHAUMETI","Meylan, Chaumetière"],
["GENCHAUMIER","Seyssins, Hameau des Chaumières"],
["GENCHAVANT","Grenoble, Chavant"],
["GENCHEABBE","Claix, Chemin de l'Abbé"],
["GENCHEMAUPA","Noyarey, Rue du Maupas"],
["GENCHEMBATO","Corenc, Batonnière"],
["GENCHEMI","Saint-Martin-le-Vinoux, Canet"],
["GENCHEMVER","Saint-Égrève, Chemin vert"],
["GENCHENES","Sassenage, Les Chênes"],
["GENCHENEVIE","Domène, Chenevières"],
["GENCHIAISE","Proveysieux, La Chiaise"],
["GENCHIEZE","Claix, La Chièze"],
["GENCHOLLET","Brié-et-Angonnes, Le Chollet"],
["GENCHOPIN","Saint-Martin-d'Hères, Chopin"],
["GENCHORCOND","Grenoble, Chorier - Condorcet"],
["GENCHRISTUR","Grenoble, Christophe Turc"],
["GENCHURU","Le Sappey-en-Chartreuse, Churut"],
["GENCIMEBOUR","Vif, La Cime du Bourg"],
["GENCIMEMONT","Quaix-en-Chartreuse, La Cime de Mont-Quaix"],
["GENCIMENTIE","Claix, Les Cimentiers"],
["GENCIMESEYP","Seyssinet-Pariset, Cimetière"],
["GENCIMETIGA","Seyssins, Garlettes"],
["GENCIMETIGS","La Tronche, Cimetière du Grand Sablon"],
["GENCITEINTE","Grenoble, Cité Internationale"],
["GENCITELABE","Saint-Martin-d'Hères, Cité Labeye"],
["GENCITEMACE","Grenoble, Cité Jean Macé"],
["GENCITEPMIS","Grenoble, Cité Paul Mistral"],
["GENCITESCOL","Varces-Allières-et-Risset, Collège Jules Verne"],
["GENCLAIXMAI","Claix, Claix Mairie"],
["GENCLEMENCE","Grenoble, Clémenceau"],
["GENCLINBELD","Saint-Martin-d'Hères, Clinique Belledonne"],
["GENCLINDAU","Seyssins, Clinique - Portail"],
["GENCLINMUT","Grenoble, Groupe Hospitalier Mutualiste"],
["GENCLOSDOMI","Le Pont-de-Claix, Clos Dominique"],
["GENCLOSDOR","Grenoble, Clos d'Or"],
["GENCLOSGRUE","Saint-Martin-le-Vinoux, Clos Gérard Gruel"],
["GENCLOSSTMA","Saint-Martin-le-Vinoux, Clos Saint Martin"],
["GENCOLARZEL","Château-Bernard, Col de l'Arzelier"],
["GENCOLAVIER","Mont-Saint-Martin, Colavière"],
["GENCOLCHART","Saint-Martin-le-Vinoux, Collège Chartreuse"],
["GENCOLCLEME","Saint-Martin-le-Vinoux, Col de Clémencières"],
["GENCOLCOMBO","Claix, Col de Comboire"],
["GENCOLI","Saint-Martin-d'Hères, Coli"],
["GENCOLLSAUL","Eybens, Collège des Saules"],
["GENCOLMANHE","Échirolles, Colonel Manhès"],
["GENCOLMATTO","Vizille, Collège Les Mattons"],
["GENCOLPORTE","Sarcenas, Col de Porte"],
["GENCOLVENCE","Corenc, Col de Vence"],
["GENCOMBALEY","Proveysieux, Planfay Combaleyre"],
["GENCOMBOIRE","Échirolles, Comboire"],
["GENCOMMANAL","La Tronche, Commandant Nal"],
["GENCOMMANDE","Échirolles, Commanderie"],
["GENCOMPLEXE","Sassenage, Complexe Sportif"],
["GENCONDIUNI","Saint-Martin-d'Hères, Condillac - Universités"],
["GENCONDORCE","Grenoble, Condorcet"],
["GENCONRADKI","Saint-Martin-le-Vinoux, Conrad Kilian"],
["GENCORENCMA","Corenc, Corenc Mairie"],
["GENCORENCVI","Corenc, Corenc Village"],
["GENCORNEDOR","Corenc, La Corne d'Or"],
["GENCORNIERS","Vizille, Les Corniers"],
["GENCOSSEY","Claix, Cossey"],
["GENCOTEAU","Claix, Le Coteau"],
["GENCOTESASS","Sassenage, Les Côtes"],
["GENCOUBERTI","Domène, Coubertin"],
["GENCROISEM","Saint-Martin-d'Uriage, Croisement 6"],
["GENCROIX","Saint-Paul-de-Varces, La Croix"],
["GENCROIXROU","Saint-Martin-d'Hères, Croix Rouge"],
["GENCRXROLLA","Claix, La Croix Rolland"],
["GENCULFROID","Venon, Cul Froid"],
["GENCURIVERC","Fontaine, Curie - Vercors"],
["GENCUVILLEU","Saint-Égrève, Cuvilleux"],
["GENCXCIBENS","Meylan, Croix de Cibeins"],
["GENCXMONTFL","Corenc, Croix de Montfleury"],
["GENCXPATRE","Saint-Martin-d'Hères, Croix du Pâtre"],
["GENCXRAMEAU","Meylan, Croix des Rameaux"],
["GENDEGAULLE","Eybens, Général de Gaulle"],
["GENDENPAPIN","Échirolles, Denis Papin"],
["GENDEPORTES","Grenoble, Rue des Déportés"],
["GENDETOURBE","Meylan, La Détourbe"],
["GENDOMENEMA","Domène, Domène Mairie"],
["GENDOYENGOS","La Tronche, Doyen Gosse"],
["GENDRAC","Claix, Mémorial"],
["GENDRAC2","Échirolles, Drac"],
["GENDRCALME","Grenoble, Vallier - Docteur Calmette"],
["GENDRIANT","Grenoble, Driant"],
["GENDRMARTIN","Grenoble, Docteur Martin"],
["GENDRMAZET","Grenoble, Docteur Mazet"],
["GENDRSCHWEI","Grenoble, Docteur Schweitzer"],
["GENDUBEDOUT","Grenoble, Hubert Dubedout - Maison du Tourisme"],
["GENECHALIER","Veurey-Voroize, Les Echalières"],
["GENECHIGARE","Échirolles, Echirolles Gare"],
["GENECOLE","Quaix-en-Chartreuse, Ecoles"],
["GENECOLELP","Champ-sur-Drac, Le Pavillon"],
["GENECOLEREY","Vif, Ecole Reymure"],
["GENECOLHOSP","Échirolles, Ecoles Hospitalières"],
["GENECRINS","Fontaine, Les Écrins"],
["GENECUREUIL","Échirolles, Ecureuil"],
["GENEDELWEIS","Gières, Edelweiss"],
["GENEDISON","Grenoble, Edison"],
["GENEDMOESMO","Grenoble, Edmond Esmonin"],
["GENEDROSTAN","Saint-Martin-d'Hères, Edmond Rostand"],
["GENEDVAILLA","Saint-Martin-d'Hères, Edouard Vaillant"],
["GENEGLISESE","Saint-Égrève, Eglise"],
["GENEGRECOLE","Proveysieux, Proveysieux Village"],
["GENEGREGUA","Proveysieux, Pont du Gua"],
["GENEGREMOLL","Proveysieux, Le Mollard"],
["GENEJCURIE","Vizille, Ecoles Joliot-Curie"],
["GENELSATRIO","Saint-Martin-d'Hères, Elsa Triolet"],
["GENEMILGUEY","Grenoble, Emile Gueymard"],
["GENENGENIER","Sassenage, Les Engenières"],
["GENEPICEA","Gières, Epicéa"],
["GENESCLANGO","Grenoble, Esclangon"],
["GENESPLANAD","Grenoble, Annie Fratellini-Esplanade"],
["GENESSARTS","Échirolles, Essarts - La Butte"],
["GENETIEGRAP","Saint-Martin-d'Hères, Etienne Grappe"],
["GENEUGENESU","Grenoble, Eugène Sue"],
["GENEYGALA","Corenc, Eygala"],
["GENFACPHARM","Meylan, Faculté de Pharmacie"],
["GENFAUCONNI","Seyssinet-Pariset, Fauconnière"],
["GENFELIXVIA","Grenoble, Félix Viallet"],
["GENFIANCEY","Saint-Égrève, Chemin Fiancey"],
["GENFLAUCLOS","Grenoble, Flaubert - Clos d'Or"],
["GENFOCHAIRE","Mont-Saint-Martin, Fochaire"],
["GENFOCHFERI","Grenoble, Foch - Ferrié"],
["GENFONDRATE","Claix, Fond Ratel"],
["GENFONTAGNE","Varces-Allières-et-Risset, Fontagneux"],
["GENFONTAHDV","Fontaine, Fontaine Hôtel de Ville - La Source"],
["GENFONTAINA","Fontaine, Les Fontainades - Le Vog"],
["GENFONTANIL","Fontanil-Cornillon, Palluel"],
["GENFONTANIM","Fontanil-Cornillon, Le Fontanil Mairie"],
["GENFONTCIM","Fontanil-Cornillon, Le Fontanil Cimetière"],
["GENFONVIEIL","Quaix-en-Chartreuse, Fontvieille"],
["GENFRBLUMET","Sassenage, François Blumet"],
["GENFRENAIE","Venon, La Frênaie"],
["GENFRQUESNA","Échirolles, François Quesnay"],
["GENFURONNIE","Claix, Furonnières"],
["GENGABFAURE","Saint-Martin-d'Hères, Gabriel Fauré"],
["GENGAGNIERE","Saint-Martin-le-Vinoux, Louis Gagnière"],
["GENGALOCHER","Saint-Martin-d'Hères, Galochère"],
["GENGARCINS","Vif, Les Garcins"],
["GENGARDE","Saint-Paul-de-Varces, La Garde"],
["GENGAREJARR","Jarrie, Jarrie Gare"],
["GENGARENNE","Corenc, La Garenne"],
["GENGARES","Grenoble, Gares"],
["GENGARLETTE","Seyssins, Garlettes"],
["GENGAVANIER","Saint-Égrève, Gavanière"],
["GENGAY","Saint-Martin-d'Hères, Gay"],
["GENGAYLUSSA","Échirolles, Gay Lussac"],
["GENGDCHATEL","Saint-Martin-d'Hères, Grand Châtelet"],
["GENGDTRONCH","La Tronche, Grande Tronche"],
["GENGDVERGER","Champ-sur-Drac, Grand Verger"],
["GENGERARPHI","Fontaine, Gérard Philipe"],
["GENGIERGARE","Gières, Gières Gare - Universités"],
["GENGIGNOUX","Grenoble, Maurice Gignoux"],
["GENGIRAUDIE","Varces-Allières-et-Risset, La Giraudière"],
["GENGLAIEULS","Saint-Martin-d'Hères, Glaïeuls"],
["GENGLAIRAUX","Saint-Égrève, Les Glairaux"],
["GENGLIERES","Échirolles, Les Glières"],
["GENGONNADIE","Champ-sur-Drac, Marcel Paul"],
["GENGRANDPRE","Seyssinet-Pariset, Grand Pré"],
["GENGRANG","Saint-Égrève, Grange Haute"],
["GENGRANGE","Vif, La Grange"],
["GENGRANGECH","Eybens, La Grange du Château"],
["GENGRANGES","Échirolles, Les Granges"],
["GENGRANIER","Meylan, Granier"],
["GENGRAPH","Échirolles, Centre du graphisme"],
["GENGRDPLACE","Grenoble, Grand'place"],
["GENGRDSABLO","La Tronche, Grand Sablon"],
["GENGREHOTEL","Grenoble, Grenoble Hôtel de Ville"],
["GENGRESIVAU","Corenc, Grésivaudan"],
["GENGRIMPI","Vizille, Le Grimpillon"],
["GENGROSCHEN","Varces-Allières-et-Risset, Le Gros Chêne"],
["GENGRUGLIAS","Échirolles, Grugliasco"],
["GENGUEBOUTE","Meylan, Gué du Boutet"],
["GENGUERIMAN","Saint-Martin-le-Vinoux, 16 Août 1944"],
["GENGUICHARD","Vaulnaveys-le-Haut, Les Guichards"],
["GENGUILE","Sarcenas, Guilletière"],
["GENGUSTRIVE","Grenoble, Gustave Rivet"],
["GENGUYMOCQU","Échirolles, Guy Mocquet"],
["GENHBERLUNI","Saint-Martin-d'Hères, Hector Berlioz - Universités"],
["GENHDUNANT","Grenoble, Henri Dunant"],
["GENHEBOURG","Herbeys, Herbeys Le Bourg"],
["GENHENRIREY","Seyssins, Henri Rey"],
["GENHENRIWAL","Saint-Martin-d'Hères, Henri Wallon"],
["GENHOPITSUD","Échirolles, Hôpital Sud"],
["GENHOPMICHA","La Tronche, Hôpital Michallon"],
["GENHOPOLICE","Grenoble, Hôtel de Police"],
["GENHORLOGE","Saint-Martin-le-Vinoux, Horloge"],
["GENHOTELBEL","Saint-Martin-le-Vinoux, Hôtel Bellevue"],
["GENHOUILLEB","Saint-Martin-d'Hères, Houille Blanche"],
["GENHTMEYLAN","Meylan, Haut-Meylan"],
["GENHVENCE","Corenc, Hameau de Vence"],
["GENILESCORD","Veurey-Voroize, Iles Cordées"],
["GENILESMARS","Le Pont-de-Claix, Iles de Mars"],
["GENILEVERTE","Grenoble, Ile Verte"],
["GENILIADE","Eybens, L'Iliade"],
["GENINRIA","Montbonnot-Saint-Martin, INRIA"],
["GENIRENEJOL","Le Pont-de-Claix, Irène Joliot-Curie"],
["GENIUTUFRAP","Gières, Universités - IUT - UFRAPS"],
["GENJACOBINS","Vif, Jacobins"],
["GENJAILLIER","Meylan, Les Jaillières"],
["GENJAVAUX","Eybens, Les Javaux"],
["GENJBRUANT","Vaulnaveys-le-Haut, Ecole Jules Bruant"],
["GENJEANNARC","Grenoble, Jeanne d'Arc"],
["GENJEANPREV","Fontaine, Jean Prévost"],
["GENJFLANDRI","Meylan, Jules Flandrin"],
["GENJRACINE","Grenoble, Jean Racine"],
["GENJULESGUE","Fontaine, Jules Guesde"],
["GENJULESREY","La Tronche, Jules Rey"],
["GENKARBEN","Saint-Égrève, Karben"],
["GENKARLMARX","Fontaine, Karl Marx"],
["GENLABAUME","Seyssins, La Baume"],
["GENLACHAL","Saint-Martin-le-Vinoux, Lachal"],
["GENLACHARRI","Le Gua, La Charrière"],
["GENLACHENAI","Venon, La Chênaie"],
["GENLACOMBE","Gières, La Combe"],
["GENLACUCHE","Veurey-Voroize, La Cuche"],
["GENLAFAURIE","Venon, La Faurie"],
["GENLAFOY","Meylan, La Foy"],
["GENLAGAY","Bresson,  Bresson Lagay"],
["GENLAGNEAU","Seyssins, L'Agneau"],
["GENLAGOMMA","Saint-Martin-le-Vinoux, Le Gomma"],
["GENLALUIRE","Le Pont-de-Claix, Gendarmerie"],
["GENLALUNE","Seyssins, Rue de la Lune"],
["GENLAMELLE","Champ-sur-Drac, La Melle"],
["GENLAMONTA","Saint-Égrève, La Monta"],
["GENLAMURAIL","Seyssinet-Pariset, Murailles"],
["GENLANGEVIN","Échirolles, Paul Langevin"],
["GENLAPIERRE","Le Gua, La Pierre"],
["GENLAPLAINE","Seyssinet-Pariset, La Plaine"],
["GENLAPOYA","Fontaine, La Poya"],
["GENLARIVO","Mont-Saint-Martin, La Rivoire"],
["GENLARIVOIR","Saint-Martin-le-Vinoux, La Rivoire"],
["GENLASERRAL","Venon, La Serralière"],
["GENLASURE","Fontaine, La Sure"],
["GENLATUILE","Vaulnaveys-le-Haut, La Tuilerie"],
["GENLAVALONE","Vif, La Valonne"],
["GENLAVILLE","Venon, La Ville"],
["GENLEBOURG","Eybens, Le Bourg"],
["GENLEBRET","Meylan, Le Brêt"],
["GENLECELLIE","Seyssins, Clinique du Dauphiné"],
["GENLECHAMAN","Gières, Le Chamandier"],
["GENLECHAPON","Venon, Le Chapon"],
["GENLECHENIL","Venon, Le Chenil"],
["GENLECHERES","Meylan, Les Léchères"],
["GENLECOMB","Seyssinet-Pariset, Les Combes"],
["GENLECRET","Eybens, Le Crêt"],
["GENLECRETS","Sarcenas, Le Crêt"],
["GENLEGATINE","Saint-Martin-le-Vinoux, Gatinet"],
["GENLEGORGET","La Tronche, Le Gorget"],
["GENLEGOUILL","Le Sappey-en-Chartreuse, Le Gouillat"],
["GENLEGUA","Sassenage, Le Gua"],
["GENLEGUAMAI","Le Gua, Le Gua Mairie"],
["GENLEJAPIN","Gières, Le Japin"],
["GENLEMARAIS","Saint-Martin-d'Hères, Le Marais"],
["GENLEMASGAC","Saint-Martin-le-Vinoux, Mas Caché"],
["GENLENCLOS","Brié-et-Angonnes, L'Enclos"],
["GENLEONJOUH","Grenoble, Léon Jouhaux"],
["GENLEPARL","Seyssins, Le Parlement"],
["GENLEPERROU","Venon, Le Perroud"],
["GENLEPLATR","Jarrie, Le Plâtre"],
["GENLEPLATRE","Vaulnaveys-le-Bas, Chemin des Cottes"],
["GENLEPRIOU","Seyssins, Le Priou"],
["GENLEREFUGE","Vif, Le Refuge"],
["GENLEREYNET","Venon, Le Reynet"],
["GENLERIF","Vif, Le Rif"],
["GENLERONZA","La Tronche, Le Rozan"],
["GENLESALLAS","Vizille, Les Allas"],
["GENLESBAINS","Grenoble, Suzanne Noël - Les Bains"],
["GENLESCOMBE","Saint-Martin-le-Vinoux, Les Combes"],
["GENLESCOTES","Seyssins, Les Côtes"],
["GENLESESSAR","Grenoble, Les Essarts"],
["GENLESFAURE","Le Gua, Les Faures"],
["GENLESFAUVE","Saint-Martin-le-Vinoux, Les Fauvettes"],
["GENLESFORGE","Vizille, Les Forges"],
["GENLESILES","Seyssinet-Pariset, Les Iles"],
["GENLESPIES","Sassenage, Les Pies"],
["GENLETOILE","Le Pont-de-Claix, L'Etoile"],
["GENLEVERNAY","Miribel-Lanchâtre, Le Vernay"],
["GENLEVETIER","Saint-Martin-le-Vinoux, Levetière"],
["GENLHERMITA","Saint-Martin-le-Vinoux, L'Hermitage"],
["GENLMICHEL","Grenoble, Louise Michel"],
["GENLOUISJOU","Grenoble, Louis Jouvet"],
["GENLTE","Vizille, Vizille Lycée"],
["GENLYCBACHA","Meylan, Lycée du Grésivaudan - Bachais"],
["GENLYCGRESI","Meylan, Lycée du Grésivaudan"],
["GENLYSROUGE","Grenoble, Lys Rouge"],
["GENMADELEIN","Grenoble, Madeleine"],
["GENMAICULTU","Grenoble, MC2: Maison de la Culture"],
["GENMAINNATI","Grenoble, Marché d'Intérêt National"],
["GENMAIRIECO","Corenc, Mairie-Condamine"],
["GENMAIRIESM","Saint-Martin-le-Vinoux, Hôtel de Ville"],
["GENMAISANCI","Grenoble, Maison des Anciens"],
["GENMAISNEUV","Eybens, Maisons Neuves"],
["GENMAISON","Vaulnaveys-le-Bas, Maison Blanche"],
["GENMAISONCO","Saint-Martin-d'Hères, Maison Communale"],
["GENMAISONNA","Fontaine, Louis Maisonnat"],
["GENMALACHER","Meylan, Malacher"],
["GENMALADIER","Sassenage, Maladière"],
["GENMALHERBE","Grenoble, Malherbe"],
["GENMALHIVER","Claix, Malhivert"],
["GENMALISSOL","Varces-Allières-et-Risset, Malissolles"],
["GENMALLIFAU","Grenoble, Mallifaud"],
["GENMARAT","Fontaine, Marat"],
["GENMARCEAU","Grenoble, Marceau - Jardin des Vallons"],
["GENMARCHAND","Vaulnaveys-le-Haut, Marchandises"],
["GENMARCSANG","Seyssins, Marc Sangnier"],
["GENMARESIST","Grenoble, Martyrs - Résistance"],
["GENMARIANNE","Le Pont-de-Claix, Marianne"],
["GENMARIECUR","Échirolles, Marie Curie"],
["GENMARITELL","Bresson, La Maritelle"],
["GENMARRONNI","Veurey-Voroize, Les Marronniers"],
["GENMASDESIL","Seyssins, Mas des Iles"],
["GENMASGARNI","Vif, Mas Garni"],
["GENMASSEGU","Vif, Le Masségu"],
["GENMASSENET","Grenoble, Massenet"],
["GENMAUPA","Saint-Martin-d'Uriage, Maupas"],
["GENMAUPERTJ","Jarrie, Maupertuis"],
["GENMAUPERTU","Meylan, Maupertuis"],
["GENMAYENCIN","Gières, Mayencin - Champ Roman"],
["GENMEINGET","Saint-Paul-de-Varces, Le Meinget"],
["GENMETRA","Brié-et-Angonnes, Les Métraux"],
["GENMEYLMAIR","Meylan, Meylan Mairie"],
["GENMICHALLO","La Tronche, Michallon"],
["GENMIRIBEL","Miribel-Lanchâtre, Miribel"],
["GENMOLLARD","Corenc, Rochasson"],
["GENMOLLARDP","Sassenage, Mollard - Pichon"],
["GENMOLLARSA","Le Sappey-en-Chartreuse, Les Jonquilles"],
["GENMONMOUSS","Échirolles, Monmousseau"],
["GENMONTCHAV","Montchaboud, Montchaboud Le Village"],
["GENMONTFLEU","Corenc, Montfleury"],
["GENMONTLIVE","Meylan, Montlivet"],
["GENMONTQUAI","Quaix-en-Chartreuse, Mont-Quaix"],
["GENMONUMENT","Corenc, Monument"],
["GENMORTES","Domène, Les Mortes"],
["GENMOUCHERO","Claix, Moucherotte"],
["GENMOUNIER","Grenoble, Mounier"],
["GENMOUTONNE","Saint-Égrève, Moutonnées"],
["GENMURET","Saint-Égrève, Muret"],
["GENMURIERS","Meylan, Les Mûriers"],
["GENMUSEEDAU","Grenoble, Musée Dauphinois"],
["GENMUSGEOCH","Échirolles, Musée Géo Charles"],
["GENMUSHEBER","La Tronche, Musée Hébert"],
["GENMUTUALIT","Grenoble, Mutualité"],
["GENNAMIERE","Mont-Saint-Martin, Chemin de Namière"],
["GENNARBONNE","Saint-Martin-le-Vinoux, Narbonne"],
["GENNAVIS","Échirolles, Navis"],
["GENNERON","Saint-Martin-le-Vinoux, Néron"],
["GENNEYRBELL","Saint-Martin-d'Hères, Neyrpic - Belledonne"],
["GENNODAMLAC","Varces-Allières-et-Risset, Notre-Dame de Lachal"],
["GENNORBSEGA","Meylan, Norbert Ségard"],
["GENNOTREDAM","Grenoble, Notre-Dame - Musée"],
["GENNOYARBAS","Noyarey, Bascule"],
["GENNOYARSTJ","Noyarey, Saint-Jean"],
["GENNOYVILLA","Noyarey, Noyarey Village"],
["GENODYSSEE","Eybens, Odyssée"],
["GENOISEAUX","Corenc, Les Oiseaux"],
["GENORATOIRE","Domène, L'Oratoire"],
["GENORIEL","Varces-Allières-et-Risset, L'Oriel"],
["GENOVALIE","Sassenage, L'Ovalie"],
["GENPABLONER","Saint-Martin-d'Hères, Pablo Neruda"],
["GENPABLOPIC","Échirolles, Collège Pablo Picasso"],
["GENPAJON","Corenc, Charles Pajon"],
["GENPALAQUIT","Sarcenas, Col de Palaquit"],
["GENPALJUSTI","Grenoble, Palais de Justice - Gare"],
["GENPAMPRES","Claix, Les Pampres"],
["GENPARCBICH","Noyarey, Parc des Biches"],
["GENPARCS","Sassenage, Les Parcs"],
["GENPARISE","Seyssinet-Pariset, Pariset"],
["GENPASCAL","La Tronche, Pascal"],
["GENPAULCOCA","Grenoble, Paul Cocat"],
["GENPAULELUA","Saint-Martin-d'Hères, Paul Eluard"],
["GENPAVILLON","Varces-Allières-et-Risset, Pavillon"],
["GENPCLAUDEL","Grenoble, Paul Claudel"],
["GENPEAGEDEV","Vizille, Le Péage"],
["GENPEIFFEND","Saint-Martin-d'Uriage, Les Peiffendes"],
["GENPELISIER","Varces-Allières-et-Risset, Pélissière"],
["GENPELLOUTI","Échirolles, Fernand Pelloutier"],
["GENPERCEVAL","Seyssinet-Pariset, Percevalière"],
["GENPERIBROS","Saint-Martin-d'Hères, Péri - Brossolette"],
["GENPERIERES","Veurey-Voroize, Perrières"],
["GENPEROUSES","Claix, Les Pérouses"],
["GENPERRIERE","Gières, La Perrière"],
["GENPETIBRIO","Vif, Le Petit Brion"],
["GENPFMITTER","Seyssins, Parc François Mitterrand"],
["GENPHEROULT","Échirolles, Paul Héroult"],
["GENPIEDGIER","Gières, Pied de Gières"],
["GENPIERCOUR","Saint-Martin-d'Hères, Pierre Courtade"],
["GENPIERRELO","Saint-Martin-d'Hères, Pierre Loti"],
["GENPIERSEMA","Saint-Martin-d'Hères, Pierre Sémard"],
["GENPINEA","Saint-Égrève, La Pinéa - St Robert"],
["GENPISBUCLO","Meylan, Piscine des Buclos"],
["GENPLACA","Champagnier, Place du Laca"],
["GENPLACECYM","Grenoble, Place Cymaise"],
["GENPLACEQUA","Quaix-en-Chartreuse, Quaix en Chartreuse Place"],
["GENPLACESAP","Le Sappey-en-Chartreuse, Le Sappey en Ch. Place"],
["GENPLACEVIL","Seyssins, Seyssins Village"],
["GENPLACMARC","Fontaine, Place du Marché Cachin"],
["GENPLAINE","Vif, La Plaine"],
["GENPLAINEDS","Gières, Plaine des Sports"],
["GENPLAINEFL","Meylan, Plaine Fleurie"],
["GENPLALOUIS","Meylan, Place de la Louisiane"],
["GENPLANF","Proveysieux, Planfay Bas"],
["GENPLANFAY","Proveysieux, Planfay Haut"],
["GENPLATANES","Varces-Allières-et-Risset, Les Platanes"],
["GENPLGEANTS","Grenoble, Les Géants"],
["GENPLIBERAT","Sassenage, Place de la Libération"],
["GENPLREPUBL","Gières, Place de la République"],
["GENPOLESUD","Grenoble, Polesud - Alpexpo"],
["GENPOLOTTI","Échirolles, Antoine Polotti"],
["GENPOMAR","Proveysieux, Pomarey Bas"],
["GENPOMAREY","Proveysieux, Pomarey"],
["GENPOMMERAI","Varces-Allières-et-Risset, La Pommeraie"],
["GENPOMPIDOU","Claix, Pompidou"],
["GENPONSARD","Grenoble, Ponsard"],
["GENPONTCN","Champ-sur-Drac, Pont de Champ"],
["GENPONTDEV","Gières, Pont de Venon"],
["GENPONTGENE","Vif, Le Pont de Genevrey"],
["GENPONTMAS","Vizille, Le Pont du Mas"],
["GENPORTAILR","Saint-Martin-d'Hères, Portail Rouge"],
["GENPORTGRES","Saint-Martin-d'Hères, Porte du Grésivaudan"],
["GENPOSTE","Claix, Poste"],
["GENPOTIE","Saint-Martin-d'Hères, Potié"],
["GENPOULAT","Saint-Paul-de-Varces, Le Poulat"],
["GENPRAPARIS","Sassenage, Praparis Usine"],
["GENPRAPAROS","Noyarey, Praparis - Les Roses"],
["GENPREAUCR","Eybens, Pré au crêt"],
["GENPRECATLA","Meylan, Pré Catlan"],
["GENPREDEAU","Montbonnot-Saint-Martin, Pré de l'Eau"],
["GENPREDIEU","Saint-Égrève, Fiancey - Prédieu"],
["GENPREFLEUR","Sassenage, Pré Fleury"],
["GENPRELENFR","Le Gua, Prélenfrey Eglise"],
["GENPREMILL","Montbonnot-Saint-Martin, Pré Millet"],
["GENPREMOL","Poisat, Prémol"],
["GENPRENOUVE","Seyssins, Pré Nouvel"],
["GENPREORME","Varces-Allières-et-Risset, Pré de l'Orme"],
["GENPRESQUIL","Grenoble, Oxford"],
["GENPRIEURE","Domène, Le Prieuré"],
["GENPRISME","Seyssins, Le Prisme"],
["GENPROMOSOC","Saint-Martin-d'Hères, Promotion Sociale"],
["GENPROVIDEN","Corenc, Providence"],
["GENPTCHATEL","Veurey-Voroize, Petit Châtelard"],
["GENPTCLXMAI","Le Pont-de-Claix, Pont-de-Claix Mairie"],
["GENPTROUGE","Claix, Pont Rouge"],
["GENPTTRONCH","La Tronche, Petite Tronche"],
["GENPTVENCE","Saint-Égrève, Pont de Vence"],
["GENPUIS","Venon, Les Puis"],
["GENQUINZAIN","Échirolles, Quinzaine"],
["GENRABOT","Grenoble, Le Rabot"],
["GENRAFOUR","Fontanil-Cornillon, Rafour"],
["GENRAMPE","Échirolles, La Rampe - Centre-Ville"],
["GENRAYCHANA","Grenoble, Raymond Chanas"],
["GENRENECASS","Domène, René Cassin"],
["GENREPLAT","Brié-et-Angonnes, Le Replat"],
["GENREPOSOIR","Saint-Martin-le-Vinoux, Le Reposoir"],
["GENREVIREE","Meylan, La Revirée"],
["GENREVIREES","Meylan, Revirée - Sayettes"],
["GENRHINDANU","Grenoble, Rosa Parks"],
["GENRIGAU","Proveysieux, Garcinière"],
["GENRIPAILLE","Saint-Martin-le-Vinoux, Ripaillère"],
["GENRISSET","Varces-Allières-et-Risset, Risset"],
["GENRIVETS","Murianette, Les Rivets"],
["GENRIVOIRE","Sassenage, Rivoire de la Dame"],
["GENROBESPIE","Poisat, Robespierre"],
["GENROCHEFOR","Varces-Allières-et-Risset, Le Rochefort"],
["GENROCHEPLA","Saint-Martin-d'Hères, Rocheplane"],
["GENROCHEPLE","Saint-Égrève, Rochepleine"],
["GENROCHERES","Saint-Égrève, Rocher d'Escalade"],
["GENROLLANDI","Sassenage, La Rollandière"],
["GENROMANCHE","Champ-sur-Drac, Espace Navarre"],
["GENRONDEAU","Grenoble, Marielle Franco - Le Rondeau"],
["GENRONDEURO","Varces-Allières-et-Risset, Rond-Point de l'Europe"],
["GENRONZY","Claix, La Ronzy"],
["GENROSERAIE","Gières, Roseraie"],
["GENROSES","Claix, Les Roses"],
["GENROSSETS","Le Gua, Les Rossets"],
["GENROUDIER","Quaix-en-Chartreuse, Roudier"],
["GENROUSTEGR","Quaix-en-Chartreuse, Route de Saint-Egrève"],
["GENROZATIER","Varces-Allières-et-Risset, Rozatière"],
["GENRUEALPES","Fontaine, Rue des Alpes"],
["GENRUEPASTE","Fontaine, Rue Pasteur"],
["GENRUIRES","Eybens, Les Ruires-Boétie"],
["GENRUISSET","Noyarey, Le Ruisset"],
["GENSABLONS","La Tronche, Sablons"],
["GENSACRISTI","Vif, Rue de la Sacristie"],
["GENSAILLANT","Le Gua, Les Saillants"],
["GENSAINTEYN","Le Sappey-en-Chartreuse, Saint-Eynard"],
["GENSAINTMIC","Claix, Saint-Michel"],
["GENSALENGRO","Grenoble, Salengro"],
["GENSALLEZOL","Champ-sur-Drac, Zola - Mairie"],
["GENSAMMARIN","Saint-Égrève, San Marino - Barrage"],
["GENSARCENA","Sarcenas, Sarcenas Le Village"],
["GENSARCROZ","Sarcenas, Pont du Croz"],
["GENSAULES","Eybens, Les Saules"],
["GENSAVOY","Proveysieux, Savoyardière"],
["GENSEYHDV","Seyssinet-Pariset, Seyssinet-Pariset Hôtel de Ville"],
["GENSEYSROND","Seyssins, Seyssins Rondeau"],
["GENSEYSVILL","Seyssinet-Pariset, Seyssins Village"],
["GENSEYVILLA","Seyssins, Seyssins Village"],
["GENSIMIA","Jarrie, Les Simianes"],
["GENSMHVILLA","Saint-Martin-d'Hères, Saint-Martin-d'Hères Village"],
["GENSMVINOUX","Saint-Martin-le-Vinoux, Place du Village"],
["GENSNETVILA","Seyssinet-Pariset, Seyssinet Village"],
["GENSONNANT","Gières, Le Sonnant"],
["GENSOUSFRET","Quaix-en-Chartreuse, Sous La Frette"],
["GENSOUSPERO","Venon, Sous-Perroud"],
["GENSOUVE","Brié-et-Angonnes, Souveyron"],
["GENSOUVEVI","Brié-et-Angonnes, Le Coin"],
["GENSPAULMAI","Saint-Paul-de-Varces, Place"],
["GENSTADE","Échirolles, Stade"],
["GENSTADEPER","Champ-sur-Drac, Léo Lagrange"],
["GENSTADLESD","Grenoble, Stade Lesdiguières"],
["GENSTALALLI","Grenoble, Stalingrad-Alliés"],
["GENSTAUGUST","Grenoble, Saint-Augustin"],
["GENSTBARTHE","Le Gua, Saint-Barthélémy"],
["GENSTBRUNNC","Grenoble, Saint-Bruno"],
["GENSTBRUNO","Grenoble, Saint-Bruno"],
["GENSTEANGE","Varces-Allières-et-Risset, Saint-Ange"],
["GENSTECLAIR","Grenoble, Sainte-Claire - Les Halles"],
["GENSTEGVGAR","Saint-Égrève, Saint Egrève Gare"],
["GENSTEND","Varces-Allières-et-Risset, Stendhal"],
["GENSTEYNARD","Fontaine, Saint-Eynard"],
["GENSTGCOMMI","Saint-Georges-de-Commiers, St-G.-de-Commiers Gare"],
["GENSTGERMAI","La Tronche, Saint-Germain"],
["GENSTJBOSCO","Meylan, Saint-Jean Bosco"],
["GENSTLAUREN","Grenoble, Saint-Laurent"],
["GENSTMARTIN","Saint-Martin-d'Uriage, Route de Saint Martin"],
["GENSTMURY","Meylan, Saint-Mury"],
["GENSTROCH","Grenoble, Saint-Roch"],
["GENSTVICTOR","Meylan, Saint-Victor"],
["GENSUDGALAX","Échirolles, Sud Galaxie"],
["GENSURIEUX","Échirolles, Surieux"],
["GENTAILLEES","Saint-Martin-d'Hères, Les Taillées - Universités"],
["GENTAILLIS","Claix, Les Taillis"],
["GENTAVER","Brié-et-Angonnes, Tavernolles"],
["GENTEISSEIR","Grenoble, Teisseire"],
["GENTELEBAS","Grenoble, Téléphérique"],
["GENTERRATS","Gières, Les Terrats"],
["GENTERRAY","Meylan, Lionel Terray"],
["GENTHEVE","Jarrie, Les Thévenets"],
["GENTRAVERS","Vaulnaveys-le-Bas, Les Travers"],
["GENTREFFORI","Sassenage, Trefforine"],
["GENTREILLE","Meylan, La Treille"],
["GENTRONCHOP","Grenoble, La Tronche Hôpital"],
["GENTUILERIE","Seyssins, Tuilerie"],
["GENURIAGE","Saint-Martin-d'Uriage, Uriage Gare"],
["GENURIOL","Vif, Uriol"],
["GENUSINENOR","Vif, L'Usine Nord"],
["GENVALALLIE","Claix, Val d'Allières"],
["GENVALEYBEN","Eybens, Val d'Eybens"],
["GENVALLCATA","Grenoble, Vallier - Catane"],
["GENVALLIBE","Grenoble, Vallier - Libération"],
["GENVALMY","Grenoble, Flandrin - Valmy"],
["GENVARCESRE","Varces-Allières-et-Risset, République"],
["GENVASSIEUX","Échirolles, Vassieux"],
["GENVAULBAS","Vaulnaveys-le-Bas, Vaulnaveys-Le-Bas Le Village"],
["GENVAULHAUT","Vaulnaveys-le-Haut, Vaulnaveys-Le-Haut Le Village"],
["GENVENARIA","Vizille, Vénaria"],
["GENVENCEECO","Saint-Égrève, Vence EcoParc"],
["GENVENONMAI","Venon, Venon Mairie"],
["GENVERCORS","La Tronche, Vercors"],
["GENVERDERET","Eybens, Le Verderet"],
["GENVERDUN","Grenoble, Verdun - Préfecture"],
["GENVERLAINE","Grenoble, Verlaine"],
["GENVERNES","Domène, Les Vernes"],
["GENVERNET","Jarrie, Le Vernet Croix"],
["GENVERT","Claix, Vert Sapin"],
["GENVEUREYEG","Veurey-Voroize, Eglise"],
["GENVEUREYMA","Veurey-Voroize, Mairie"],
["GENVEUREYRI","Veurey-Voroize, La Rive"],
["GENVEYRET","Grenoble, Veyret"],
["GENVICTHUGO","Grenoble, Victor Hugo"],
["GENVIEUXDON","Sassenage, Vieux donjon"],
["GENVIFGARE","Vif, Vif Gare"],
["GENVIFGEND","Vif, Rivalta"],
["GENVIFMAIRI","Vif, Vif Mairie"],
["GENVIGNATE","Gières, Vignate"],
["GENVIGNES","Bresson, Les Vignes"],
["GENVIGNY","Grenoble, Vigny"],
["GENVILLAGE","Échirolles, Le Village"],
["GENVILLOLYM","Grenoble, Village Olympique"],
["GENVISANCOU","Saint-Égrève, Visancourt"],
["GENVOHRIGEN","Vizille, Parc Vöhringen"],
["GENXAVJOUVI","Grenoble, Xavier Jouvin"],
["GENZASPEYRE","Vif, Z.A. des Speyres"],
["GENZELLAMEL","Saint-Martin-d'Hères, Zella Mehlis"],
["GENZILES","Le Pont-de-Claix, ZI des Iles"]];
