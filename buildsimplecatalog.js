Money priceMoney = new Money.Builder()
  .amount(300L)
  .currency("USD")
  .build();

CatalogItemVariation itemVariationData = new CatalogItemVariation.Builder()
  .itemId("#coffee")
  .name("Small")
  .pricingType("FIXED_PRICING")
  .priceMoney(priceMoney)
  .build();

CatalogObject catalogObject = new CatalogObject.Builder("ITEM_VARIATION", "#small_coffee")
  .itemVariationData(itemVariationData)
  .build();

Money priceMoney1 = new Money.Builder()
  .amount(350L)
  .currency("USD")
  .build();

CatalogItemVariation itemVariationData1 = new CatalogItemVariation.Builder()
  .itemId("#coffee")
  .name("Large")
  .pricingType("FIXED_PRICING")
  .priceMoney(priceMoney1)
  .build();

CatalogObject catalogObject1 = new CatalogObject.Builder("ITEM_VARIATION", "#large_coffee")
  .itemVariationData(itemVariationData1)
  .build();

LinkedList<CatalogObject> variations = new LinkedList<>();
variations.add(catalogObject);
variations.add(catalogObject1);

CatalogItem itemData = new CatalogItem.Builder()
  .name("Coffee")
  .description("Coffee Drink")
  .abbreviation("Co")
  .variations(variations)
  .build();

CatalogObject object = new CatalogObject.Builder("ITEM", "#coffee")
  .itemData(itemData)
  .build();

UpsertCatalogObjectRequest body = new UpsertCatalogObjectRequest.Builder("{UNIQUE_KEY}", object)
  .build();

catalogApi.upsertCatalogObjectAsync(body)
  .thenAccept(result -> {
    System.out.println("Success!");
  })
  .exceptionally(exception -> {
    System.out.println("Failed to make the request");
    System.out.println(String.format("Exception: %s", exception.getMessage()));
    return null;
  });


{
  "catalog_object": {
    "type": "ITEM",
    "id": "FX3LTXC2CCFCGHLGMSFLBSDO",
    "updated_at": "2021-06-15T18:48:16.262Z",
    "version": 1623782896262,
    "is_deleted": false,
    "present_at_all_locations": true,
    "item_data": {
      "name": "Coffee",
      "description": "Coffee Drink",
      "abbreviation": "Co",
      "variations": [
        {
          "type": "ITEM_VARIATION",
          "id": "OXRR3XANRU5TEQ3FQMDW5IJK",
          "updated_at": "2021-06-15T18:48:16.262Z",
          "version": 1623782896262,
          "is_deleted": false,
          "present_at_all_locations": true,
          "item_variation_data": {
            "item_id": "FX3LTXC2CCFCGHLGMSFLBSDO",
            "name": "Small",
            "ordinal": 0,
            "pricing_type": "FIXED_PRICING",
            "price_money": {
              "amount": 300,
              "currency": "USD"
            },
            "stockable": true
          }
        },
        {
          "type": "ITEM_VARIATION",
          "id": "3EFNOI25E4NUK53CU4KMUHXX",
          "updated_at": "2021-06-15T18:48:16.262Z",
          "version": 1623782896262,
          "is_deleted": false,
          "present_at_all_locations": true,
          "item_variation_data": {
            "item_id": "FX3LTXC2CCFCGHLGMSFLBSDO",
            "name": "Large",
            "ordinal": 1,
            "pricing_type": "FIXED_PRICING",
            "price_money": {
              "amount": 350,
              "currency": "USD"
            },
            "stockable": true
          }
        }
      ],
      "product_type": "REGULAR"
    }
  },
  "id_mappings": [
    {
      "client_object_id": "#coffee",
      "object_id": "FX3LTXC2CCFCGHLGMSFLBSDO"
    },
    {
      "client_object_id": "#small_coffee",
      "object_id": "OXRR3XANRU5TEQ3FQMDW5IJK"
    },
    {
      "client_object_id": "#large_coffee",
      "object_id": "3EFNOI25E4NUK53CU4KMUHXX"
    }
  ]
}


CatalogTax taxData = new CatalogTax.Builder()
  .name("Drink Tax")
  .calculationPhase("TAX_SUBTOTAL_PHASE")
  .inclusionType("ADDITIVE")
  .percentage("7.5")
  .build();

CatalogObject object = new CatalogObject.Builder("TAX", "#sales_tax")
  .taxData(taxData)
  .build();

UpsertCatalogObjectRequest body = new UpsertCatalogObjectRequest.Builder("{UNIQUE_KEY}", object)
  .build();

catalogApi.upsertCatalogObjectAsync(body)
  .thenAccept(result -> {
    System.out.println("Success!");
  })
  .exceptionally(exception -> {
    System.out.println("Failed to make the request");
    System.out.println(String.format("Exception: %s", exception.getMessage()));
    return null;
  });

{
  "catalog_object": {
    "type": "TAX",
    "id": "TEROS7KLG76NDY4J7TYFZVGA",
    "updated_at": "2021-06-15T19:12:49.613Z",
    "version": 1623784369613,
    "is_deleted": false,
    "present_at_all_locations": true,
    "tax_data": {
      "name": "Drink Tax",
      "calculation_phase": "TAX_SUBTOTAL_PHASE",
      "inclusion_type": "ADDITIVE",
      "percentage": "7.5",
      "applies_to_custom_amounts": true,
      "enabled": true
    }
  },
  "id_mappings": [
    {
      "client_object_id": "#sales_tax",
      "object_id": "TEROS7KLG76NDY4J7TYFZVGA"
    }
  ]
}


Money priceMoney = new Money.Builder()
  .amount(300L)
  .currency("USD")
  .build();

CatalogItemVariation itemVariationData = new CatalogItemVariation.Builder()
  .itemId("#coffee")
  .name("Small")
  .pricingType("FIXED_PRICING")
  .priceMoney(priceMoney)
  .build();

CatalogObject catalogObject1 = new CatalogObject.Builder("ITEM_VARIATION", "#small_coffee")
  .itemVariationData(itemVariationData)
  .build();

Money priceMoney1 = new Money.Builder()
  .amount(350L)
  .currency("USD")
  .build();

CatalogItemVariation itemVariationData1 = new CatalogItemVariation.Builder()
  .itemId("#coffee")
  .name("Large")
  .pricingType("FIXED_PRICING")
  .priceMoney(priceMoney1)
  .build();

CatalogObject catalogObject2 = new CatalogObject.Builder("ITEM_VARIATION", "#large_coffee")
  .itemVariationData(itemVariationData1)
  .build();

LinkedList<CatalogObject> variations = new LinkedList<>();
variations.add(catalogObject1);
variations.add(catalogObject2);

CatalogItem itemData = new CatalogItem.Builder()
  .name("Coffee")
  .variations(variations)
  .productType("REGULAR")
  .build();

CatalogObject catalogObject = new CatalogObject.Builder("ITEM", "#coffee")
  .itemData(itemData)
  .build();

CatalogTax taxData = new CatalogTax.Builder()
  .name("Drink Tax")
  .calculationPhase("TAX_SUBTOTAL_PHASE")
  .inclusionType("ADDITIVE")
  .percentage("7.5")
  .build();

CatalogObject catalogObject3 = new CatalogObject.Builder("TAX", "#sales_tax")
  .taxData(taxData)
  .build();

LinkedList<CatalogObject> objects = new LinkedList<>();
objects.add(catalogObject);
objects.add(catalogObject3);

CatalogObjectBatch catalogObjectBatch = new CatalogObjectBatch.Builder(objects)
  .build();

LinkedList<CatalogObjectBatch> batches = new LinkedList<>();
batches.add(catalogObjectBatch);

BatchUpsertCatalogObjectsRequest body = new BatchUpsertCatalogObjectsRequest.Builder("{UNIQUE_KEY}", batches)
  .build();

catalogApi.batchUpsertCatalogObjectsAsync(body)
  .thenAccept(result -> {
    System.out.println("Success!");
  })
  .exceptionally(exception -> {
    System.out.println("Failed to make the request");
    System.out.println(String.format("Exception: %s", exception.getMessage()));
    return null;
  });


Money priceMoney = new Money.Builder()
  .amount(125L)
  .currency("USD")
  .build();

CatalogModifier modifierData = new CatalogModifier.Builder()
  .name("Whole Milk")
  .priceMoney(priceMoney)
  .modifierListId("#modifier_list")
  .build();

CatalogObject catalogObject = new CatalogObject.Builder("MODIFIER", "#whole_milk")
  .modifierData(modifierData)
  .build();

Money priceMoney1 = new Money.Builder()
  .amount(130L)
  .currency("USD")
  .build();

CatalogModifier modifierData1 = new CatalogModifier.Builder()
  .name("Skim Milk")
  .priceMoney(priceMoney1)
  .modifierListId("#modifier_list")
  .build();

CatalogObject catalogObject1 = new CatalogObject.Builder("MODIFIER", "#skim_milk")
  .modifierData(modifierData1)
  .build();

LinkedList<CatalogObject> modifiers = new LinkedList<>();
modifiers.add(catalogObject);
modifiers.add(catalogObject1);

CatalogModifierList modifierListData = new CatalogModifierList.Builder()
  .name("Milk Options")
  .modifiers(modifiers)
  .build();

CatalogObject object = new CatalogObject.Builder("MODIFIER_LIST", "#modifier_list")
  .modifierListData(modifierListData)
  .build();

UpsertCatalogObjectRequest body = new UpsertCatalogObjectRequest.Builder("{UNIQUE_KEY}", object)
  .build();

catalogApi.upsertCatalogObjectAsync(body)
  .thenAccept(result -> {
    System.out.println("Success!");
  })
  .exceptionally(exception -> {
    System.out.println("Failed to make the request");
    System.out.println(String.format("Exception: %s", exception.getMessage()));
    return null;
  });


{
  "catalog_object": {
    "type": "MODIFIER_LIST",
    "id": "ZVSGY6U63IGCZQL4IOPZAKYW",
    "updated_at": "2020-06-15T20:01:39.58Z",
    "version": 1623784369656,
    "is_deleted": false,
    "present_at_all_locations": true,
    "modifier_list_data": {
      "name": "Milk Options",
      "modifiers": [
        {
          "type": "MODIFIER",
          "id": "MNXLZRO2PIBULOX2RX56DG25",
          "updated_at": "2020-06-15T20:01:39.58Z",
          "version": 1623784369656,
          "is_deleted": false,
          "present_at_all_locations": true,
          "modifier_data": {
            "name": "Whole Milk",
            "price_money": {
              "amount": 125,
              "currency": "USD"
            },
            "on_by_default": false,
            "ordinal": 0,
            "modifier_list_id": "ZVSGY6U63IGCZQL4IOPZAKYW"
          }
        },
        {
          "type": "MODIFIER",
          "id": "Q6R5X5VMSZTYVKM37QRHNZWM",
          "updated_at": "2020-06-15T20:01:39.58Z",
          "version": 1623784369656,
          "is_deleted": false,
          "present_at_all_locations": true,
          "modifier_data": {
            "name": "Skim Milk",
            "price_money": {
              "amount": 130,
              "currency": "USD"
            },
            "on_by_default": false,
            "ordinal": 1,
            "modifier_list_id": "ZVSGY6U63IGCZQL4IOPZAKYW"
          }
        }
      ]
    }
  },
  "id_mappings": [
    {
      "client_object_id": "#modifier_list",
      "object_id": "ZVSGY6U63IGCZQL4IOPZAKYW"
    },
    {
      "client_object_id": "#whole_milk",
      "object_id": "MNXLZRO2PIBULOX2RX56DG25"
    },
    {
      "client_object_id": "#skim_milk",
      "object_id": "Q6R5X5VMSZTYVKM37QRHNZWM"
    }
  ]
}


LinkedList<String> itemIds = new LinkedList<>();
itemIds.add("FX3LTXC2CCFCGHLGMSFLBSDO");

LinkedList<String> modifierListsToEnable = new LinkedList<>();
modifierListsToEnable.add("ZVSGY6U63IGCZQL4IOPZAKYW");

UpdateItemModifierListsRequest body = new UpdateItemModifierListsRequest.Builder(itemIds)
  .modifierListsToEnable(modifierListsToEnable)
  .build();

catalogApi.updateItemModifierListsAsync(body)
  .thenAccept(result -> {
    System.out.println("Success!");
  })
  .exceptionally(exception -> {
    System.out.println("Failed to make the request");
    System.out.println(String.format("Exception: %s", exception.getMessage()));
    return null;
  });


{
  "updated_at": "2020-06-15T18:36:39.58Z"
}


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
      "type": "ITEM",
      "id": "FX3LTXC2CCFCGHLGMSFLBSDO",
      "updated_at": "2021-06-15T18:48:16.262Z",
      "version": 1623782896262,
      "is_deleted": false,
      "present_at_all_locations": true,
      "item_data": {
        "name": "Coffee",
        "description": "Coffee Drink",
        "abbreviation": "Co",
        "modifier_list_info": [
          {
            "modifier_list_id": "ZVSGY6U63IGCZQL4IOPZAKYW",
            "enabled": true
          }
        ],
        "variations": [
          {
            "type": "ITEM_VARIATION",
            "id": "3EFNOI25E4NUK53CU4KMUHXX",
            "updated_at": "2021-06-15T18:48:16.262Z",
            "version": 1623782896262,
            "is_deleted": false,
            "present_at_all_locations": true,
            "item_variation_data": {
              "item_id": "FX3LTXC2CCFCGHLGMSFLBSDO",
              "name": "Large",
              "pricing_type": "FIXED_PRICING",
              "price_money": {
                "amount": 350,
                "currency": "USD"
              }
            }
          },
          {
            "type": "ITEM_VARIATION",
            "id": "OXRR3XANRU5TEQ3FQMDW5IJK",
            "updated_at": "2021-06-15T18:48:16.262Z",
            "version": 1623782896262,
            "is_deleted": false,
            "present_at_all_locations": true,
            "item_variation_data": {
              "item_id": "FX3LTXC2CCFCGHLGMSFLBSDO",
              "name": "Small",
              "pricing_type": "FIXED_PRICING",
              "price_money": {
                "amount": 300,
                "currency": "USD"
              }
            }
          }
        ],
        "product_type": "REGULAR"
      }
    },
    {
      "type": "TAX",
      "id": "TEROS7KLG76NDY4J7TYFZVGA",
      "updated_at": "2021-06-15T19:12:49.613Z",
      "version": 1623784369613,
      "is_deleted": false,
      "present_at_all_locations": true,
      "tax_data": {
        "name": "Drink Tax",
        "calculation_phase": "TAX_SUBTOTAL_PHASE",
        "inclusion_type": "ADDITIVE",
        "percentage": "7.5",
        "applies_to_custom_amounts": true,
        "enabled": true
      }
    },
    {
      "type": "MODIFIER_LIST",
      "id": "ZVSGY6U63IGCZQL4IOPZAKYW",
      "updated_at": "2020-06-15T20:01:39.58Z",
      "version": 1623784369656,
      "is_deleted": false,
      "present_at_all_locations": true,
      "modifier_list_data": {
        "name": "Milk Options",
        "modifiers": [
          {
            "type": "MODIFIER",
            "id": "MNXLZRO2PIBULOX2RX56DG25",
            "updated_at": "2020-06-15T20:01:39.58Z",
            "version": 1623784369656,
            "is_deleted": false,
            "present_at_all_locations": true,
            "modifier_data": {
              "name": "Whole Milk",
              "price_money": {
                "amount": 125,
                "currency": "USD"
              },
              "on_by_default": false,
              "ordinal": 0,
              "modifier_list_id": "ZVSGY6U63IGCZQL4IOPZAKYW"
            }
          },
          {
            "type": "MODIFIER",
            "id": "Q6R5X5VMSZTYVKM37QRHNZWM",
            "updated_at": "2020-06-15T20:01:39.58Z",
            "version": 1623784369656,
            "is_deleted": false,
            "present_at_all_locations": true,
            "modifier_data": {
              "name": "Skim Milk",
              "price_money": {
                "amount": 130,
                "currency": "USD"
              },
              "on_by_default": false,
              "ordinal": 1,
              "modifier_list_id": "ZVSGY6U63IGCZQL4IOPZAKYW"
            }
          }
        ]
      }
    }
  ]
}

