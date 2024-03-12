[
    "dead_stock",
    "ga4"

].forEach((name) =>
    declare({
        database: env_variables.ec_project,
        schema: "trpt",
        name,
    })
);