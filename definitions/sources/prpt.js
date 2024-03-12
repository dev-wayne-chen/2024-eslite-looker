[
    "category_product1",

].forEach((name) =>
    declare({
        database: env_variables.ec_project,
        schema: "prpt",
        name,
    })
);