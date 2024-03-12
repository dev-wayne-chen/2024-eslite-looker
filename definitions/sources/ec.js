[
    "days"

].forEach((name) =>
    declare({
        database: env_variables.ec_project,
        schema: "ec",
        name,
    })
);