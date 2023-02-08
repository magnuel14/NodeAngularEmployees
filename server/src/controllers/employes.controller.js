//const hello=(req,res)=> res.send('hello');

const Employee = require('../models/Employee');
const employesContrl = {};

employesContrl.createEmployes = async (req, res) => {
    const newEmploye = new Employee(req.body);
    await newEmploye.save();
    console.log(newEmploye);
    res.send({ message: 'Employee create' });
}

employesContrl.getEmployes = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees);
}
employesContrl.getEmploye = async (req, res) => {
    //console.log(req.params);
    const employee = await Employee.findById(req.params.id);
    res.send(employee);
}
employesContrl.getEmployeByCedula = async (req, res) => {
    //console.log(req.params);
    //const nameEmployee=req.body.nameForSearch;
    const cedula = req.params.cedula;
    //console.log(cedula)
    const employee = await Employee.find({ "cedula": cedula });
    res.send(employee);
}
employesContrl.updateEmploye = async (req, res) => {
    await Employee.findByIdAndUpdate(req.params.id, req.body);
    res.json({ status: 'Employee update' });
}
employesContrl.deleteEmployes = async (req, res) => {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    res.json({ status: 'Employee Deleted' });
}

module.exports = employesContrl;