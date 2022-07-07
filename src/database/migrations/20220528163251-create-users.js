'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.TINYINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      stage: {
        type: Sequelize.STRING,
        validate: {
          allowNull: true
        }
      },
      from: {
        type: Sequelize.STRING,
        validate: {
          allowNull: true
        }
      },
      variaveis: {
        type: Sequelize.STRING,
        validate: {
          allowNull: true
        }
      },
      name: {
        type: Sequelize.STRING,
        validate: {
          allowNull: true
        }
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          allowNull: true
        }
      },
      phoneNumber: {
        type: Sequelize.STRING,
        validate: {
          allowNull: true
        }
      },
      endereco: {
        type: Sequelize.STRING,
        validate: {
          allowNull: true
        }
      },
      numero: {
        type: Sequelize.INTEGER,
        validate: {
          allowNull: true
        }
      },
      bairro: {
        type: Sequelize.STRING,
        validate: {
          allowNull: true
        }
      },
      cidade: {
        type: Sequelize.STRING,
        validate: {
          allowNull: true
        }
      },
      emailChecked: {
        type: Sequelize.BOOLEAN,
        validate: {
          allowNull: true
        }
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};