catalogApi.listCatalogAsync(
  null,
  null,
  null)
  .thenAccept(result -> {
    System.out.println("Success!");
  })
  .exceptionally(exception -> {
    System.out.println("Failed to make the request");
    System.out.println(String.format("Exception: %s", exception.getMessage()));
    return null;
  });

{
  "objects": [
    {
      "type": "MEASUREMENT_UNIT",
      "id": "4RW2GG2JAZJUZJ2PICQWLOCE",
      "updated_at": "2020-08-25T21:26:38.674Z",
      "version": 1598390798674,
      "is_deleted": false,
      "present_at_all_locations": true,
      "measurement_unit_data": {
        "measurement_unit": {
          "volume_unit": "GENERIC_CUP",
          "type": "TYPE_VOLUME"
        },
        "precision": 0
      }
    },
    {
      "type": "CATEGORY",
      "id": "BCXXYC5OXEQK4BQHFA22QEUI",
      "updated_at": "2020-08-25T22:42:33.028Z",
      "version": 1598395353028,
      "is_deleted": false,
      "present_at_all_locations": true,
      "category_data": {
        "name": "coffee"
      }
    },
    {
      "type": "ITEM",
      "id": "BDWYGZO5QQWWEVFV6PAEP3BS",
      "updated_at": "2020-11-02T21:25:44.14Z",
      "version": 1604352344140,
      "is_deleted": false,
      "present_at_all_locations": true,
      "image_id": "7WWYBOW5AYLEWFW62HQX7EP4",
      "item_data": {
        "name": "adventure",
        "variations": [
          {
            "type": "ITEM_VARIATION",
            "id": "PRAVBIFA4IDWI3IPO6KQVV2B",
            "updated_at": "2020-11-02T21:25:44.14Z",
            "version": 1604352344140,
            "is_deleted": false,
            "present_at_all_locations": true,
            "item_variation_data": {
              "item_id": "BDWYGZO5QQWWEVFV6PAEP3BS",
              "name": "8-day explore",
              "ordinal": 0,
              "pricing_type": "FIXED_PRICING",
              "price_money": {
                "amount": 250000,
                "currency": "USD"
              },
              "transition_time": 0
            }
          }
        ],
        "product_type": "APPOINTMENTS_SERVICE",
        "skip_modifier_screen": false
      }
    },
    {
      "type": "MEASUREMENT_UNIT",
      "id": "AR3VHRKBMOMM3GSUVJOPDROE",
      "updated_at": "2020-10-26T23:42:21.33Z",
      "version": 1603755741330,
      "is_deleted": false,
      "present_at_all_locations": true,
      "measurement_unit_data": {
        "measurement_unit": {
          "time_unit": "GENERIC_DAY",
          "type": "TYPE_TIME"
        },
        "precision": 1
      }
    },
    {
      "type": "MEASUREMENT_UNIT",
      "id": "D4O5QM2G4OK7UGL43QO6YSCG",
      "updated_at": "2020-10-26T23:44:17.751Z",
      "version": 1603755857751,
      "is_deleted": false,
      "present_at_all_locations": true,
      "measurement_unit_data": {
        "measurement_unit": {
          "time_unit": "GENERIC_HOUR",
          "type": "TYPE_TIME"
        },
        "precision": 3
      }
    },
    ...
  ]
}

