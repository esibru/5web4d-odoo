// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://esibru.github.io',
  	base: '/5web4d-odoo/',
	integrations: [
		starlight({
			title: '5WEB4D',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/esibru/5web4d-odoo' },
				{ icon: 'document', label: 'Odoo', href: 'https://www.odoo.com/documentation/18.0/fr/developer/reference.html' },
			],
			
			sidebar: [
				{
					label: '1. Introduction',
					items: [
						{ label: '1.1 - Introduction', slug: 'labos/introduction' },
						{ label: '1.2 - Installation', slug: 'labos/installation' },
						{ label: '1.3 - Découverte', slug: 'labos/discovery' },

					],
				},
				{
					label: '2 - Création d\'un module',
					items: [
						{ label: '2.1 - Mon premier module', slug: 'labos/first-model' },
						{ label: '2.2 - Les associations', slug: 'labos/associations' },
						{ label: '2.3 - Extension de modèle', slug: 'labos/extension' },
						{ label: '2.4 - Vue générique', slug: 'labos/first-view' },	
						{ label: '2.5 - Vue personnalisée', slug: 'labos/custom_view' },	
						{ label: '2.6 - Logique métier associée au bouton', slug: 'labos/business-logic' },
						{ label: "2.7 - Mettre en place une API", slug: 'labos/api'},
						{ label: '2.8 - Sécurité', slug: 'labos/security' },
					],
				},
				{
					label: '3 - Sous-module',
					items: [
						{ label: '3.1 - Créer un sous-module', slug: 'labos/sub-module' },
						{ label: '3.2 - Créer le modèle Tag', slug: 'labos/task-model' },
						{ label: '3.3 - Ajouter des fonctionnalités à Task', slug: 'labos/task-business' },
						{ label: '3.4 - Ajouter les droits d\'accès au modèle', slug: 'labos/task-management' },
						{ label: '3.5 - La vue', slug: 'labos/task-view'},
					],
				},
				{
					label: '4 - Mise à jour du modèle',
					items: [
						{ label: "4.1 - Observateur-Observé", slug: 'labos/observer'},
						{ label: "4.2 - Contrainte", slug: 'labos/constrains'},
						{ label: "4.3 - Importer des données", slug: 'labos/import-data'},
						{ label: "4.4 - Intégrer un module existant", slug: 'labos/existing-module'},
					],
				},
			],
		}),
	],
});
