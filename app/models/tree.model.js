module.exports = (sequelize, Sequelize) => {
    const Tree = sequelize.define('tree', {
        treeName: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.STRING
        }
    });
    return Tree;
};