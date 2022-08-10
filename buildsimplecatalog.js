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
