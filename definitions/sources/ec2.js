[
    "mch_category",
    "order_item_detail",
    "order_item_detail_all",
    "return_item_detail",
    "order_item_detail_all_48969",
    "main_orders",
    "sub_order_items",
    "sub_orders",

    "aff_performance_record",
    "allowance_detail",
    "target",
    "loyalty_type"
].forEach((name) =>
    declare({
        database: "ec-dev-412708",
        schema: "ec2",
        name,
    })
);
