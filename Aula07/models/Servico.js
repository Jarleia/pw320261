const {DataTypes} = require('sequelize');

const {sequelize} = require('../config/index');

const Servico = sequelize.define("Servico",{
    id: { type: DataTypes.INTEGER,
           primaryKey:true,
           autoIncrement:true
        },
    nome:{ type:DataTypes.STRING(100),
            allowNull:false,
        },
    preco:{ type:DataTypes.FLOAT,
            allowNull:false,
        },
    descricao:{ type:DataTypes.STRING(100),
          allowNull:false,
          }
});

module.exports = Servico
