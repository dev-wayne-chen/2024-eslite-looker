[
    "dead_stock",
    "ga4"

].forEach((name) =>
    declare({
        database: "ec-dev-412708",
        schema: "trpt",
        name,
    })
);