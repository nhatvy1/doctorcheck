'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('clinics', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			name: {
				type: Sequelize.STRING
			},
			address: {
				type: Sequelize.STRING
			},
			description: {
				type: Sequelize.TEXT
			},
			image: {
				type: Sequelize.STRING
			},
			createAt: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updateAt: {
				allowNull: false,
				type: Sequelize.DATE
			}
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('clinics');
	}
};