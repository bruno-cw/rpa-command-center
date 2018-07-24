var controller = {} ;
controller.get = (req, res, next) => {
    res.status(200).send({
        test: "result"
    });
};
console.log("config-controller loaded!")
module.exports = controller;