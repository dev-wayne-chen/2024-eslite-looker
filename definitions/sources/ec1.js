[
    "order_item_detail"

].forEach((name) =>
    declare({
        database: env_variables.ec_project,
        schema: "ec1",
        name,
    })
);
