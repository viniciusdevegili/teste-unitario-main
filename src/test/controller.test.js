const { describe, expect, it } = require('@jest/globals');
const ControllerExercicio = require('../controllers/controller.js'); 

describe('ControllerExercicio', () => {
  let controller;

  beforeEach(() => {
    controller = new ControllerExercicio();
  });

  describe('Somar', () => {
    it('somar corretamente dois números positivos', () => {
      const req = { body: { num1: 5, num2: 3 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      controller.Somar(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ result: 8 });
    });

    it('somar corretamente números negativos', () => {
      const req = { body: { num1: -5, num2: -3 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      controller.Somar(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ result: -8 });
    });

    it('lidar com zero e número positivo', () => {
      const req = { body: { num1: 0, num2: 3 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      controller.Somar(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ result: 3 });
    });

    it('lidar com números decimais', () => {
      const req = { body: { num1: 3.5, num2: 2.5 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      controller.Somar(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ result: 6 });
    });
  });

  describe('Subtrair', () => {
    it('subtrair corretamente dois números positivos', () => {
      const req = { body: { num1: 5, num2: 3 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      controller.Subtrair(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ result: 2 });
    });

    it('subtrair corretamente números negativos', () => {
      const req = { body: { num1: -5, num2: -3 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      controller.Subtrair(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ result: -2 });
    });

    it('lidar com zero e número positivo', () => {
      const req = { body: { num1: 3, num2: 0 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      controller.Subtrair(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ result: 3 });
    });

    it('lidar com números decimais', () => {
      const req = { body: { num1: 3.5, num2: 2.5 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      controller.Subtrair(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ result: 1 });
    });
  });

  describe('Multiplicar', () => {
    it('multiplicar corretamente dois números positivos', () => {
      const req = { body: { num1: 4, num2: 3 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      controller.Multiplicar(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ result: 12 });
    });

    it('multiplicar corretamente números negativos', () => {
      const req = { body: { num1: -4, num2: -3 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      controller.Multiplicar(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ result: 12 });
    });

    it('lidar com zero e número positivo', () => {
      const req = { body: { num1: 3, num2: 0 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      controller.Multiplicar(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ result: 0 });
    });

    it('lidar com números decimais', () => {
      const req = { body: { num1: 2.5, num2: 3 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      controller.Multiplicar(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ result: 7.5 });
    });
  });

  describe('Dividir', () => {
    it('dividir corretamente dois números positivos', () => {
      const req = { body: { num1: 6, num2: 2 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      controller.Dividir(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ result: 3 });
    });

    it('lidar com divisão por zero', () => {
      const req = { body: { num1: 8, num2: 0 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      controller.Dividir(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: "Erro ao Dividir" });
    });

    it('lidar com zero dividido por número positivo', () => {
      const req = { body: { num1: 0, num2: 5 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      controller.Dividir(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ result: 0 });
    });

    it('lidar com números decimais', () => {
      const req = { body: { num1: 7.5, num2: 2.5 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      controller.Dividir(req, res);

      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ result: 3 });
    });
  });

});
