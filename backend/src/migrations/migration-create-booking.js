'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('bookings', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			statusId: {
				type: Sequelize.STRING
			},
			doctorId: {
				type: Sequelize.STRING
			},
			patientId: {
				type: Sequelize.INTEGER
			},
			date: {
				type: Sequelize.DATE
			},
            timeType: {
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
		await queryInterface.dropTable('bookings');
	}
};