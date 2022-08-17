#
  "errors": [],
  "adjustment": {
    "id": "UDMOEO78BG6GYWA2XDRYX3KB",
    "reference_id": "4a366069-4096-47a2-99a5-0084ac879509",
    "from_state": "IN_STOCK",
    "to_state": "SOLD",
    "location_id": "C6W5YS5QM06F5",
    "catalog_object_id": "W62UWFY35CWMYGVWK6TWJDNI",
    "catalog_object_type": "ITEM_VARIATION",
    "quantity": "7",
    "total_price_money": {
      "amount": 4550,
      "currency": "USD"
    },
    "occurred_at": "2016-11-16T25:44:22.837Z",
    "created_at": "2016-11-17T13:02:15.142Z",
    "source": {
      "product": "SQUARE_POS",
      "application_id": "416ff29c-86c4-4feb-b58c-9705f21f3ea0",
      "name": "Square Point of Sale 4.37"
    },
    "team_member_id": "LRK57NSQ5X7PUD05"
  }
#

result = client.inventory.retrieve_inventory_adjustment(
  adjustment_id = "UDMOEO78BG6GYWA2XDRYX3KB"
)

if result.is_success():
  print(result.body)
elif result.is_error():
  print(result.errors)
