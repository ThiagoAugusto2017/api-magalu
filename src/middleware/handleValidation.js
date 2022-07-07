const express = require("express");
const validationResult = require("express-validator");


export const validate = (req, res, next) => {
    const erros = validationResult(req);
    if (erros.isEmpty()) {
        return next();
    };
    const extratectErrors= [];
    erros.array().map(err => extratectErrors.push({
        [err.param]: err.msg
    }))
    return res.status(422).json({
        errors: extratectErrors
    })
}