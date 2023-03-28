'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('schedules', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			currentNumber: {
				type: Sequelize.INTEGER
			},
			maxNumber: {
				type: Sequelize.INTEGER
			},
			date: {
				type: Sequelize.DATE
			},
			timeType: {
				type: Sequelize.STRING
			},
            doctorId: {
                type: Sequelize.INTEGER
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
		await queryInterface.dropTable('schedules');
	}
};