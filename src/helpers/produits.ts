import * as Yup from 'yup'

const initialValues = {
    produit: {
        titre: '',
        prix: '',
        description: '',
        devise: '',
        localisation: '',
        sub_categorie_produit_id: '',
        images: [],
    },
    vehicule: {
        modele: '',
        annee: '',
        kilometrage: '',
        type_vehicule: '',
        couleur: '',
        carburant: '',
        transmission: '',
        nombre_portes: '',
        nombre_places: '',
        plan_de_paiement: '',
        disponibilite: '',
    },
    immobilier: {
        type_de_bien: '',
        adresse: '',
        surface_habitable: '',
        nombre_chambres: '',
        nombre_pieces: '',
    },
    emploi: {
        type_contrat: '',
        lieu: '',
        secteur_activite: '',
        niveau_experience: '',
        date_limite: '',
        site_web: '',
        formation_requise: '',
        etat_offre: '',
    },
    evenement: {
        date_evenement: '',
        lieu: '',
        type_prix: '',
        site_web: '',
        etat_evenement: '',
    },
    vetement_chaussures: {
        type: '',
        taille: '',
        matiere: '',
    },
    autre_produit: {
        etat: '',
        marque: '',
    },
    service: {
        statut: '',
    },
}

const validationSchema = Yup.object({
    produit: Yup.object().shape({
        titre: Yup.string().required('Titre requis'),
        prix: Yup.number().required('Prix requis').positive(),
        description: Yup.string().required('Description requise'),
        devise: Yup.string().required('Devise requise'),
        localisation: Yup.string().required('Localisation requise'),
        sub_categorie_produit_id: Yup.number().required('Sous-catégorie requise'),
        images: Yup.array().required('Images requises'),
    }),
    vehicule: Yup.object().shape({
        modele: Yup.string().required('Modèle requis'),
        annee: Yup.number().required('Année requise'),
        kilometrage: Yup.number().required('Kilométrage requis'),
        type_vehicule: Yup.string().required('Type de véhicule requis'),
        couleur: Yup.string().required('Couleur requise'),
        carburant: Yup.string().required('Carburant requis'),
        transmission: Yup.string().required('Transmission requise'),
        nombre_portes: Yup.number().required('Nombre de portes requis'),
        nombre_places: Yup.number().required('Nombre de places requis'),
        plan_de_paiement: Yup.string().required('Plan de paiement requis'),
        disponibilite: Yup.string().required('Disponibilité requise'),
    }),
    immobilier: Yup.object().shape({
        type_de_bien: Yup.string().required('Type de bien requis'),
        adresse: Yup.string().required('Adresse requise'),
        surface_habitable: Yup.number().required('Surface habitable requise'),
        nombre_chambres: Yup.number().required('Nombre de chambres requis'),
        nombre_pieces: Yup.number().required('Nombre de pièces requis'),
    }),
    emploi: Yup.object().shape({
        type_contrat: Yup.string().required('Type de contrat requis'),
        lieu: Yup.string().required('Lieu requis'),
        secteur_activite: Yup.string().required('Secteur d\'activité requis'),
        niveau_experience: Yup.string().required('Niveau d\'expérience requis'),
        date_limite: Yup.date().required('Date limite requise'),
        site_web: Yup.string().url('URL invalide').required('Site web requis'),
        formation_requise: Yup.string().required('Formation requise'),
        etat_offre: Yup.string().required('État de l\'offre requis'),
    }),
    evenement: Yup.object().shape({
        date_evenement: Yup.date().required('Date de l\'événement requise'),
        lieu: Yup.string().required('Lieu requis'),
        type_prix: Yup.string().required('Type de prix requis'),
        site_web: Yup.string().url('URL invalide').required('Site web requis'),
        etat_evenement: Yup.string().required('État de l\'événement requis'),
    }),
    vetement_chaussures: Yup.object().shape({
        type: Yup.string().required('Type requis'),
        taille: Yup.string().required('Taille requise'),
        matiere: Yup.string().required('Matière requise'),
    }),
    autre_produit: Yup.object().shape({
        etat: Yup.string().required('État requis'),
        marque: Yup.string().required('Marque requise'),
    }),
    service: Yup.object().shape({
        statut: Yup.number().required('Statut requis'),
    }),
})

export {
    initialValues,
    validationSchema
}