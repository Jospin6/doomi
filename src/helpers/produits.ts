import * as Yup from 'yup'
import { 
    VIHICULE,
    IMMOBILIER,
    EVENEMENT,
    EMPLOI,
    VETEMENT_CHAUSSURES,
    AUTRE_PRODUIT,
    SERVICE 
} from '@/helpers/constants';
import { useSelector } from 'react-redux';
import { RootState } from '@/features/store';

const subCategory = useSelector((state: RootState) => state.subCategory.currentSubCategory);

const initialValues = {
    produit: {
        titre: '',
        prix: '',
        description: '',
        devise: '',
        localisation: '',
        user_id: '',
        sub_categorie_produit_id: '',
        images: [],
    },
    ...(subCategory === VIHICULE && {
        vehicule: {
        modele: '',
        annee: 2010,
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
    }),
    ...(subCategory === IMMOBILIER && {
        immobilier: {
            type_de_bien: '',
            adresse: '',
            surface_habitable: '',
            nombre_chambres: 1,
            nombre_pieces: 2,
        },
    }),
    ...(subCategory === EMPLOI && {
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
    }),
    ...(subCategory === EVENEMENT && {
        evenement: {
            date_evenement: '',
            lieu: '',
            type_prix: '',
            site_web: '',
            etat_evenement: '',
        },
    }),
    ...(subCategory === VETEMENT_CHAUSSURES && {
        vetement_chaussures: {
            type: '',
            taille: '',
            matiere: '',
        },
    }),
    ...(subCategory === AUTRE_PRODUIT && {
        autre_produit: {
            etat: '',
            marque: '',
        },
    }),
    ...(subCategory === SERVICE && {
        service: {
            statut: '',
        },
    })
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
    ...(subCategory === VIHICULE && {
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
    }),
    ...(subCategory === IMMOBILIER && {
        immobilier: Yup.object().shape({
            type_de_bien: Yup.string().required('Type de bien requis'),
            adresse: Yup.string().required('Adresse requise'),
            surface_habitable: Yup.number().required('Surface habitable requise'),
            nombre_chambres: Yup.number().required('Nombre de chambres requis'),
            nombre_pieces: Yup.number().required('Nombre de pièces requis'),
        }),
    }),
    ...(subCategory === EMPLOI && {
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
    }),
    ...(subCategory === EVENEMENT && {
        evenement: Yup.object().shape({
            date_evenement: Yup.date().required('Date de l\'événement requise'),
            lieu: Yup.string().required('Lieu requis'),
            type_prix: Yup.string().required('Type de prix requis'),
            site_web: Yup.string().url('URL invalide').required('Site web requis'),
            etat_evenement: Yup.string().required('État de l\'événement requis'),
        }),
    }),
    ...(subCategory === VETEMENT_CHAUSSURES && {
        vetement_chaussures: Yup.object().shape({
            type: Yup.string().required('Type requis'),
            taille: Yup.string().required('Taille requise'),
            matiere: Yup.string().required('Matière requise'),
        }),
    }),
    ...(subCategory === AUTRE_PRODUIT && {
        autre_produit: Yup.object().shape({
            etat: Yup.string().required('État requis'),
            marque: Yup.string().required('Marque requise'),
        }),
    }),
    ...(subCategory === SERVICE && {
        service: Yup.object().shape({
            statut: Yup.number().required('Statut requis'),
        }),
    })
})

export {
    initialValues,
    validationSchema
}