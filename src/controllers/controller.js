const ServicoExercicio = require("../services/service.js");
const servico = new ServicoExercicio()

class ControllerExercicio {

    Somar(req, res){
      try {
        const num1 = req.body.num1;
        const num2 = req.body.num2;

        const result = servico.Somar(num1, num2)
        
        res.status(200).json({ result });
      } catch (error) {
        res.status(500).json({ message: "Erro ao somar"});
      }
    }

    Subtrair(req, res){
      try {
        const num1 = req.body.num1;
        const num2 = req.body.num2;

        const result = servico.Subtrair(num1, num2)
        
        res.status(200).json({ result});
      } catch (error) {
        res.status(500).json({ message: "Erro ao Subtrair"});
      }
    }

    Dividir(req, res) {
      try {
        const num1 = req.body.num1;
        const num2 = req.body.num2;
    
        if (num2 === 0) {
          throw new Error("Erro ao dividir por zero");
        }
    
        const result = servico.Dividir(num1, num2);
        
        res.status(200).json({ result });
      } catch (error) {
        res.status(500).json({ message: "Erro ao Dividir" });
      }
    }

    Multiplicar(req, res){
      try {
        const num1 = req.body.num1
        const num2 = req.body.num2

        const result = servico.Multiplicar(num1, num2)
        
        res.status(200).json({ result });
      } catch (error) {
        res.status(500).json({ message: "Erro ao Multiplicar"});
      }
    }

}

module.exports = ControllerExercicio;