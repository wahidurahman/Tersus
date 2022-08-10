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

    
catalogApi.listCatalogAsync(
  null,
  "ITEM",
  1598467546497L)
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
      "type": "ITEM",
      "id": "QZEQSRNMTCXWXQD2QLEVCSRA",
      "updated_at": "2020-08-26T16:37:03.648Z",
      "version": 1598459823648,
      "is_deleted": false,
      "present_at_all_locations": true,
      "image_id": "6PM4GCSHU5LYKW2NHB2MXZHM",
      "item_data": {
        "name": "Product1",
        "description": "product",
        "visibility": "PRIVATE",
        "variations": [
          {
            "type": "ITEM_VARIATION",
            "id": "C6MGLXXDLJ6I4QYZ6NHWOHO4",
            "updated_at": "2020-08-25T22:56:43.556Z",
            "version": 1598396203556,
            "is_deleted": false,
            "present_at_all_locations": true,
            "item_variation_data": {
              "item_id": "QZEQSRNMTCXWXQD2QLEVCSRA",
              "name": "Regular",
              "sku": "12345",
              "ordinal": 0,
              "pricing_type": "FIXED_PRICING",
              "price_money": {
                "amount": 2500,
                "currency": "USD"
              },
              "location_overrides": [
                {
                  "location_id": "SNTR5190QMFGM",
                  "track_inventory": true,
                  "inventory_alert_type": "LOW_QUANTITY",
                  "inventory_alert_threshold": 10
                }
              ]
            }
          }
        ],
        "product_type": "REGULAR",
        "skip_modifier_screen": false,
        "ecom_available": false,
        "ecom_visibility": "UNINDEXED"
      }
    },
    {
      "type": "ITEM",
      "id": "TTWX5A7GKJAISB6XPT7NIHF5",
      "updated_at": "2020-08-26T18:45:46.497Z",
      "version": 1598467546497,
      "is_deleted": false,
      "present_at_all_locations": true,
      "image_id": "7WWYBOW5AYLEWFW62HQX7EP4",
      "item_data": {
        "name": "Service",
        "product_type": "APPOINTMENTS_SERVICE"
      }
    },
    {
      "type": "ITEM",
      "id": "3KZ5V3SFVKGRCFQZI6JIMGVW",
      "updated_at": "2020-08-26T18:45:46.497Z",
      "version": 1598467546497,
      "is_deleted": false,
      "present_at_all_locations": true,
      "item_data": {
        "name": "AA Service",
        "variations": [
          {
            "type": "ITEM_VARIATION",
            "id": "3RJAVZQKCD5T6GPVWQCYK647",
            "updated_at": "2020-08-26T18:45:46.497Z",
            "version": 1598467546497,
            "is_deleted": false,
            "present_at_all_locations": true,
            "image_id": "7WWYBOW5AYLEWFW62HQX7EP4",
            "item_variation_data": {
              "item_id": "3KZ5V3SFVKGRCFQZI6JIMGVW",
              "name": "AA SERVICE",
              "ordinal": 0,
              "pricing_type": "FIXED_PRICING",
              "price_money": {
                "amount": 50000,
                "currency": "USD"
              },
              "inventory_alert_type": "NONE"
            }
          }
        ],
        "product_type": "APPOINTMENTS_SERVICE"
      }
    }
  ]
}

catalogApi.retrieveCatalogObjectAsync(
  "QZEQSRNMTCXWXQD2QLEVCSRA",
  null,
  1598396203556L)
  .thenAccept(result -> {
    System.out.println("Success!");
  })
  .exceptionally(exception -> {
    System.out.println("Failed to make the request");
    System.out.println(String.format("Exception: %s", exception.getMessage()));
    return null;
  });



{
  "object": {
    "type": "ITEM",
    "id": "QZEQSRNMTCXWXQD2QLEVCSRA",
    "updated_at": "2020-08-25T22:56:43.556Z",
    "version": 1598396203556,
    "is_deleted": false,
    "present_at_all_locations": true,
    "item_data": {
      "name": "Product1",
      "description": "product",
      "visibility": "PRIVATE",
      "variations": [
        {
          "type": "ITEM_VARIATION",
          "id": "C6MGLXXDLJ6I4QYZ6NHWOHO4",
          "updated_at": "2020-08-25T22:56:43.556Z",
          "version": 1598396203556,
          "is_deleted": false,
          "present_at_all_locations": true,
          "item_variation_data": {
            "item_id": "QZEQSRNMTCXWXQD2QLEVCSRA",
            "name": "Regular",
            "sku": "12345",
            "ordinal": 0,
            "pricing_type": "FIXED_PRICING",
            "price_money": {
              "amount": 2500,
              "currency": "USD"
            },
            "location_overrides": [
              {
                "location_id": "SNTR5190QMFGM",
                "track_inventory": true,
                "inventory_alert_type": "LOW_QUANTITY",
                "inventory_alert_threshold": 10
              }
            ]
          }
        }
      ],
      "product_type": "REGULAR",
      "skip_modifier_screen": false,
      "ecom_available": false,
      "ecom_visibility": "UNINDEXED"
    }
  }
}



LinkedList<String> objectIds = new LinkedList<>();
objectIds.add("3KZ5V3SFVKGRCFQZI6JIMGVW");
objectIds.add("QZEQSRNMTCXWXQD2QLEVCSRA");

BatchRetrieveCatalogObjectsRequest body = new BatchRetrieveCatalogObjectsRequest.Builder(objectIds)
  .catalogVersion(1598467546497L)
  .build();

catalogApi.batchRetrieveCatalogObjectsAsync(body)
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
      "type": "ITEM",
      "id": "QZEQSRNMTCXWXQD2QLEVCSRA",
      "updated_at": "2020-08-26T16:37:03.648Z",
      "version": 1598459823648,
      "is_deleted": false,
      "present_at_all_locations": true,
      "image_id": "6PM4GCSHU5LYKW2NHB2MXZHM",
      "item_data": {
        "name": "Product1",
        "description": "product",
        "visibility": "PRIVATE",
        "variations": [
          {
            "type": "ITEM_VARIATION",
            "id": "C6MGLXXDLJ6I4QYZ6NHWOHO4",
            "updated_at": "2020-08-25T22:56:43.556Z",
            "version": 1598396203556,
            "is_deleted": false,
            "present_at_all_locations": true,
            "item_variation_data": {
              "item_id": "QZEQSRNMTCXWXQD2QLEVCSRA",
              "name": "Regular",
              "sku": "12345",
              "ordinal": 0,
              "pricing_type": "FIXED_PRICING",
              "price_money": {
                "amount": 2500,
                "currency": "USD"
              },
              "location_overrides": [
                {
                  "location_id": "SNTR5190QMFGM",
                  "track_inventory": true,
                  "inventory_alert_type": "LOW_QUANTITY",
                  "inventory_alert_threshold": 10
                }
              ]
            }
          }
        ],
        "product_type": "REGULAR",
        "skip_modifier_screen": false,
        "ecom_available": false,
        "ecom_visibility": "UNINDEXED"
      }
    },
    {
      "type": "ITEM",
      "id": "3KZ5V3SFVKGRCFQZI6JIMGVW",
      "updated_at": "2020-08-26T18:45:46.497Z",
      "version": 1598467546497,
      "is_deleted": false,
      "present_at_all_locations": true,
      "item_data": {
        "name": "AA Service",
        "variations": [
          {
            "type": "ITEM_VARIATION",
            "id": "3RJAVZQKCD5T6GPVWQCYK647",
            "updated_at": "2020-08-26T18:45:46.497Z",
            "version": 1598467546497,
            "is_deleted": false,
            "present_at_all_locations": true,
            "image_id": "7WWYBOW5AYLEWFW62HQX7EP4",
            "item_variation_data": {
              "item_id": "3KZ5V3SFVKGRCFQZI6JIMGVW",
              "name": "AA SERVICE",
              "ordinal": 0,
              "pricing_type": "FIXED_PRICING",
              "price_money": {
                "amount": 50000,
                "currency": "USD"
              },
              "inventory_alert_type": "NONE"
            }
          }
        ],
        "product_type": "APPOINTMENTS_SERVICE"
      }
    }
  ]
}


{
  "object": {
    "type": "PRICING_RULE",
    "id": "DYOXHWTDIGV75BPSRY7E7FOD",
    "updated_at": "2021-04-23T04:36:33.649Z",
    "version": 1619152593649,
    "is_deleted": false,
    "present_at_all_locations": true,
    "pricing_rule_data": {
      "discount_id": "E3GXIY42XBSI7LRLFF42DYTS",
      "match_products_id": "FQAZS2FAPQKOXK5OUW3B7FXU",
      "exclude_products_id": "F4W3VBGEMPEPSI6Z27E5MT3F",
      "exclude_strategy": "MOST_EXPENSIVE",
      "application_mode": "AUTOMATIC",
      "discount_target_scope": "LINE_ITEM"
    }
  }
}


catalogApi.retrieveCatalogObjectAsync(
  "DYOXHWTDIGV75BPSRY7E7FOD",
  true,
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
  "object": {
    "type": "PRICING_RULE",
    "id": "DYOXHWTDIGV75BPSRY7E7FOD",
    "updated_at": "2021-04-23T04:36:33.649Z",
    "version": 1619152593649,
    "is_deleted": false,
    "present_at_all_locations": true,
    "pricing_rule_data": {
      "discount_id": "E3GXIY42XBSI7LRLFF42DYTS",
      "match_products_id": "FQAZS2FAPQKOXK5OUW3B7FXU",
      "exclude_products_id": "F4W3VBGEMPEPSI6Z27E5MT3F",
      "exclude_strategy": "MOST_EXPENSIVE",
      "application_mode": "AUTOMATIC",
      "discount_target_scope": "LINE_ITEM"
    }
  },
  "related_objects": [
    {
      "type": "DISCOUNT",
      "id": "E3GXIY42XBSI7LRLFF42DYTS",
      "updated_at": "2021-04-23T04:36:33.649Z",
      "version": 1619152593649,
      "is_deleted": false,
      "present_at_all_locations": true,
      "discount_data": {
        "name": "BOGO",
        "discount_type": "FIXED_PERCENTAGE",
        "percentage": "50.0",
        "application_method": "MANUALLY_APPLIED",
        "modify_tax_basis": "MODIFY_TAX_BASIS"
      }
    },
    {
      "type": "PRODUCT_SET",
      "id": "FQAZS2FAPQKOXK5OUW3B7FXU",
      "updated_at": "2021-04-23T04:36:33.649Z",
      "version": 1619152593649,
      "is_deleted": false,
      "present_at_all_locations": true,
      "product_set_data": {
        "product_ids_all": [
          "F4W3VBGEMPEPSI6Z27E5MT3F",
          "HXQMTXD223N5XQTDBMBUNDIH"
        ],
        "quantity_exact": 1
      }
    },
    {
      "type": "PRODUCT_SET",
      "id": "F4W3VBGEMPEPSI6Z27E5MT3F",
      "updated_at": "2021-04-23T04:36:33.649Z",
      "version": 1619152593649,
      "is_deleted": false,
      "present_at_all_locations": true,
      "product_set_data": {
        "product_ids_any": [
          "QZEQSRNMTCXWXQD2QLEVCSRA"
        ],
        "quantity_exact": 2,
        "all_products": false
      }
    },
    {
      "type": "ITEM",
      "id": "QZEQSRNMTCXWXQD2QLEVCSRA",
      "updated_at": "2021-04-27T21:08:38.635Z",
      "version": 1619557718635,
      "is_deleted": false,
      "custom_attribute_values": {
        "sq0ids-tDPX2MkYWBjjQSKR88V-BQ:online_readiness": {
          "name": "online_readiness",
          "custom_attribute_definition_id": "FSHYJTVR2BZ3E3LDZFCTD5AU",
          "type": "NUMBER",
          "number_value": "0.88742",
          "key": "sq0ids-tDPX2MkYWBjjQSKR88V-BQ:online_readiness"
        }
      },
      "present_at_all_locations": true,
      "image_id": "6PM4GCSHU5LYKW2NHB2MXZHM",
      "item_data": {
        "name": "Safari adventure",
        "description": "service",
        "visibility": "PRIVATE",
        "category_id": "LPKD3DOEDBF6TKBYHX26E3DM",
        "tax_ids": [
          "KBPWWOXZHOGNOSQ2LIVS4H27"
        ],
        "variations": [
          {
            "type": "ITEM_VARIATION",
            "id": "C6MGLXXDLJ6I4QYZ6NHWOHO4",
            "updated_at": "2021-04-27T21:08:38.635Z",
            "version": 1619557718635,
            "is_deleted": false,
            "present_at_all_locations": true,
            "item_variation_data": {
              "item_id": "QZEQSRNMTCXWXQD2QLEVCSRA",
              "name": "Regular",
              "sku": "12345",
              "ordinal": 0,
              "pricing_type": "FIXED_PRICING",
              "price_money": {
                "amount": 2500,
                "currency": "USD"
              },
              "location_overrides": [
                {
                  "location_id": "SNTR5190QMFGM",
                  "track_inventory": true,
                  "inventory_alert_type": "LOW_QUANTITY",
                  "inventory_alert_threshold": 10
                }
              ],
              "measurement_unit_id": "SDC4U3C332O5WJDARTUF6BAA"
            }
          }
        ],
        "product_type": "REGULAR",
        "skip_modifier_screen": false,
        "ecom_available": false,
        "ecom_visibility": "UNINDEXED"
      }
    },
    {
      "type": "PRODUCT_SET",
      "id": "F4W3VBGEMPEPSI6Z27E5MT3F",
      "updated_at": "2021-04-23T04:36:33.649Z",
      "version": 1619152593649,
      "is_deleted": false,
      "present_at_all_locations": true,
      "product_set_data": {
        "product_ids_any": [
          "QZEQSRNMTCXWXQD2QLEVCSRA"
        ],
        "quantity_exact": 2,
        "all_products": false
      }
    },
    {
      "type": "PRODUCT_SET",
      "id": "HXQMTXD223N5XQTDBMBUNDIH",
      "updated_at": "2021-04-26T22:21:26.328Z",
      "version": 1619475686328,
      "is_deleted": false,
      "present_at_all_locations": true,
      "product_set_data": {
        "quantity_min": 1,
        "quantity_max": 3,
        "all_products": false
      }
    }
  ]
}




