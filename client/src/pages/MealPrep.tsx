import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingCart,
  Clock,
  DollarSign,
  Users,
  Leaf,
  ChefHat,
  Calendar,
  MapPin,
  CheckCircle2,
  Truck,
  PhoneCall,
} from "lucide-react";
import { recipes } from "@/data/recipes";
import RecipeModal from "@/components/RecipeModal";
import type { Recipe } from "@/data/recipes";
import { GUMROAD_URLS } from "@/config/gumroad";

const mealPlans = [
  {
    name: "Anti-Inflammatory Week",
    meals: 21,
    recipes: 7,
    cost: "$75",
    image: "/plan-anti-inflammatory.png",
    difficulty: "Beginner",
    description: "Complete week of meals designed to reduce inflammation and support autoimmune healing"
  },
  {
    name: "Budget Plant-Based Week",
    meals: 21,
    recipes: 6,
    cost: "$50",
    image: "/plan-budget.png",
    difficulty: "Beginner",
    description: "Affordable plant-based eating with bulk ingredients and smart shopping strategies"
  },
  {
    name: "Thyroid Support Protocol",
    meals: 21,
    recipes: 8,
    cost: "$85",
    image: "/plan-thyroid.png",
    difficulty: "Intermediate",
    description: "Selenium, zinc, and iodine-rich meals specifically for thyroid health"
  }
];

const weeklyMenu = [
  {
    id: "monday",
    day: "Monday",
    combo: "Salmon cakes, mason jar salad, and beet-apple juice",
    price: 18,
    note: "High-protein, fresh, and easy on the stomach",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "tuesday",
    day: "Tuesday",
    combo: "Kale pasta and a lemon-ginger wellness drink",
    price: 17,
    note: "Comfort food energy with a healing twist",
    gradient: "from-lime-500 to-green-600",
  },
  {
    id: "wednesday",
    day: "Wednesday",
    combo: "Tuna salad and a cucumber-mint smoothie",
    price: 16,
    note: "Light, crisp, and midday-friendly",
    gradient: "from-sky-500 to-cyan-600",
  },
  {
    id: "thursday",
    day: "Thursday",
    combo: "Lentil bowl, roasted vegetables, and pineapple-mint water",
    price: 17,
    note: "Plant-based comfort with plenty of fiber",
    gradient: "from-orange-500 to-amber-600",
  },
  {
    id: "friday",
    day: "Friday",
    combo: "Jerk salmon bites, quinoa salad, and hibiscus lime tea",
    price: 19,
    note: "Friday favorite with a little flair",
    gradient: "from-fuchsia-500 to-rose-600",
  },
];

const dmvStores = [
  {
    name: "MOM's Organic Market",
    type: "Organic Groceries",
    locations: "Multiple DMV locations",
    highlight: "Employee-owned, excellent bulk section",
    bestFor: "Organic produce, bulk grains, supplements"
  },
  {
    name: "Yes! Organic Market",
    type: "Natural Foods",
    locations: "DC, Arlington, Petworth",
    highlight: "Black-owned, community-focused",
    bestFor: "Fresh produce, specialty items, prepared foods"
  },
  {
    name: "Whole Foods Market",
    type: "Natural & Organic",
    locations: "Throughout DMV",
    highlight: "Amazon Prime discounts available",
    bestFor: "365 brand (budget-friendly), wide selection"
  },
  {
    name: "DC Fresh Farmers Markets",
    type: "Farmers Market",
    locations: "Multiple locations (seasonal)",
    highlight: "Support local farmers, SNAP accepted",
    bestFor: "Fresh seasonal produce, herbs, honey"
  },
  {
    name: "H Mart",
    type: "Asian Groceries",
    locations: "Multiple DMV locations",
    highlight: "Affordable produce and specialty items",
    bestFor: "Mushrooms, seaweed, tofu, Asian vegetables"
  },
  {
    name: "Trader Joe's",
    type: "Specialty Groceries",
    locations: "Throughout DMV",
    highlight: "Affordable organic options",
    bestFor: "Frozen foods, nuts, pre-cut veggies"
  }
];

export default function MealPrepResources() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStoreType, setSelectedStoreType] = useState("All");
  const [selectedDays, setSelectedDays] = useState<string[]>(["monday", "wednesday"]);
  const [serviceType, setServiceType] = useState<"pickup" | "delivery">("pickup");
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const storeTypes = ["All", ...Array.from(new Set(dmvStores.map((store) => store.type)))];
  const filteredStores =
    selectedStoreType === "All"
      ? dmvStores
      : dmvStores.filter((store) => store.type === selectedStoreType);

  const selectedMenuItems = weeklyMenu.filter((item) => selectedDays.includes(item.id));
  const subtotal = selectedMenuItems.reduce((sum, item) => sum + item.price, 0);
  const deliveryFee = serviceType === "delivery" && selectedMenuItems.length > 0 ? 7 : 0;
  const total = subtotal + deliveryFee;

  const handleViewRecipe = (recipe: Recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };

  const handleToggleDay = (dayId: string) => {
    setSelectedDays((current) =>
      current.includes(dayId)
        ? current.filter((id) => id !== dayId)
        : [...current, dayId],
    );
  };

  const handleMealPrepSubmit = () => {
    if (!selectedDays.length || !customerName.trim() || !phone.trim()) {
      window.alert("Please choose at least one menu item and add your name and phone number.");
      return;
    }

    const orderSummary = selectedMenuItems
      .map((item) => `${item.day}: ${item.combo} - $${item.price}`)
      .join("\n");

    const subject = encodeURIComponent(`DMV Meal Prep Request - ${customerName}`);
    const body = encodeURIComponent(
      [
        "New Ask DoGood DMV meal prep request",
        "",
        `Name: ${customerName}`,
        `Phone: ${phone}`,
        `Email: ${email || "Not provided"}`,
        `Service Type: ${serviceType}`,
        `Preferred Date: ${pickupDate || "Not provided"}`,
        `Preferred Time: ${pickupTime || "Not provided"}`,
        `Delivery Address: ${serviceType === "delivery" ? address || "Needed" : "Pickup requested"}`,
        "",
        "Selected Menu:",
        orderSummary,
        "",
        `Subtotal: $${subtotal}`,
        `Delivery Fee: $${deliveryFee}`,
        `Estimated Total: $${total}`,
        "",
        `Notes: ${notes || "None"}`,
        "",
        `After reviewing this request, I will complete checkout here: ${GUMROAD_URLS.mealPrepDeposit}`,
      ].join("\n"),
    );

    window.location.href = `mailto:askdogood@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4">
              <Badge className="text-lg px-4 py-2">
                <ChefHat className="h-5 w-5 mr-2 inline" />
                Meal Prep Made Simple
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
              Heal Your Body, One Meal at a Time
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Plant-based, anti-inflammatory recipes, plus a simple DMV meal prep request flow for
              people who want healing support without spending all week in the kitchen.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>Save 5+ Hours Weekly</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-primary" />
                <span>Pickup or delivery +$7</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-primary" />
                <span>Healing-forward menu examples</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-y bg-background/80">
        <div className="container">
          <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-6">
                <Badge className="mb-3">DMV Meal Prep Menu</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Monday-Friday sample combos</h2>
                <p className="text-muted-foreground max-w-2xl">
                  Choose the meals you want, add your preferred date and time, and submit your request.
                  When you are ready, finish with secure checkout on Gumroad.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
                {weeklyMenu.map((item) => {
                  const selected = selectedDays.includes(item.id);

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleToggleDay(item.id)}
                      className={`text-left rounded-3xl border p-4 transition-all ${selected ? "border-primary shadow-lg bg-primary/5" : "border-border hover:border-primary/40 hover:shadow-md"}`}
                    >
                      <div className={`mb-4 h-28 rounded-2xl bg-gradient-to-br ${item.gradient} p-4 text-white shadow-inner`}>
                        <p className="text-[11px] uppercase tracking-[0.28em] text-white/80">Thumbnail placeholder</p>
                        <p className="mt-3 text-xl font-semibold">{item.day}</p>
                        <p className="text-sm text-white/90">Chef-prepped combo</p>
                      </div>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-semibold">{item.combo}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{item.note}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xl font-bold text-primary">${item.price}</p>
                          {selected ? <CheckCircle2 className="h-5 w-5 text-primary ml-auto mt-2" /> : null}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <Card className="border-2 border-primary/20 shadow-2xl rounded-3xl">
              <CardHeader>
                <CardTitle className="text-2xl">Request your meal prep</CardTitle>
                <CardDescription>
                  Perfect for DMV locals who want a smooth, same-day inquiry flow and a clear total before checkout.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm font-medium">
                    Name
                    <input
                      value={customerName}
                      onChange={(event) => setCustomerName(event.target.value)}
                      className="w-full rounded-xl border bg-background px-3 py-2"
                      placeholder="Your name"
                    />
                  </label>
                  <label className="space-y-2 text-sm font-medium">
                    Phone number
                    <input
                      value={phone}
                      onChange={(event) => setPhone(event.target.value)}
                      className="w-full rounded-xl border bg-background px-3 py-2"
                      placeholder="(202) 555-1234"
                    />
                  </label>
                  <label className="space-y-2 text-sm font-medium sm:col-span-2">
                    Email
                    <input
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="w-full rounded-xl border bg-background px-3 py-2"
                      placeholder="name@email.com"
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="space-y-2 text-sm font-medium">
                    Preferred date
                    <input
                      type="date"
                      value={pickupDate}
                      onChange={(event) => setPickupDate(event.target.value)}
                      className="w-full rounded-xl border bg-background px-3 py-2"
                    />
                  </label>
                  <label className="space-y-2 text-sm font-medium">
                    Preferred time
                    <input
                      type="time"
                      value={pickupTime}
                      onChange={(event) => setPickupTime(event.target.value)}
                      className="w-full rounded-xl border bg-background px-3 py-2"
                    />
                  </label>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium">Pickup or delivery</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <button
                      type="button"
                      onClick={() => setServiceType("pickup")}
                      className={`rounded-2xl border px-4 py-3 text-left ${serviceType === "pickup" ? "border-primary bg-primary/5" : "border-border"}`}
                    >
                      <p className="font-semibold">Pickup</p>
                      <p className="text-sm text-muted-foreground">Free local pickup</p>
                    </button>
                    <button
                      type="button"
                      onClick={() => setServiceType("delivery")}
                      className={`rounded-2xl border px-4 py-3 text-left ${serviceType === "delivery" ? "border-primary bg-primary/5" : "border-border"}`}
                    >
                      <p className="font-semibold flex items-center gap-2"><Truck className="h-4 w-4" /> Delivery</p>
                      <p className="text-sm text-muted-foreground">Add $7 delivery fee</p>
                    </button>
                  </div>
                </div>

                {serviceType === "delivery" ? (
                  <label className="space-y-2 text-sm font-medium block">
                    Delivery address
                    <input
                      value={address}
                      onChange={(event) => setAddress(event.target.value)}
                      className="w-full rounded-xl border bg-background px-3 py-2"
                      placeholder="Street, city, and zip"
                    />
                  </label>
                ) : null}

                <label className="space-y-2 text-sm font-medium block">
                  Notes or dietary requests
                  <textarea
                    value={notes}
                    onChange={(event) => setNotes(event.target.value)}
                    className="min-h-24 w-full rounded-xl border bg-background px-3 py-2"
                    placeholder="Allergies, spice level, no onions, extra greens, etc."
                  />
                </label>

                <div className="rounded-2xl bg-secondary/20 p-4 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Selected meals</span>
                    <span className="font-semibold">{selectedMenuItems.length}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Subtotal</span>
                    <span className="font-semibold">${subtotal}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Delivery</span>
                    <span className="font-semibold">${deliveryFee}</span>
                  </div>
                  <div className="flex items-center justify-between text-base font-bold text-primary pt-2 border-t">
                    <span>Estimated total</span>
                    <span>${total}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <Button onClick={handleMealPrepSubmit} className="w-full text-base">
                    <PhoneCall className="mr-2 h-4 w-4" /> Submit Meal Prep Request
                  </Button>
                  <Button variant="outline" className="w-full text-base border-2 border-primary/30" asChild>
                    <a href={GUMROAD_URLS.mealPrepDeposit} target="_blank" rel="noopener noreferrer">
                      Secure Checkout on Gumroad
                    </a>
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground">
                  No extra software needed: submit the form and pay on Gumroad to lock in your spot.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          <Tabs defaultValue="recipes" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 mb-12">
              <TabsTrigger value="recipes">Recipes</TabsTrigger>
              <TabsTrigger value="meal-plans">Meal Plans</TabsTrigger>
              <TabsTrigger value="shopping">DMV Shopping</TabsTrigger>
              <TabsTrigger value="guides">Guides</TabsTrigger>
            </TabsList>

            {/* Recipes Tab */}
            <TabsContent value="recipes">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Healing Recipes from My Kitchen
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  These are the recipes that helped me heal from 5 autoimmune diseases.
                  Each one is anti-inflammatory, nutrient-dense, and actually delicious.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recipes.map((recipe) => (
                  <Card key={recipe.name} className="hover:shadow-lg transition-all overflow-hidden group">
                    <div 
                      className="w-full h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url(${recipe.image})` }}
                    >
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all"></div>
                      <div className="absolute top-3 right-3 flex gap-2">
                        <Badge variant="secondary" className="backdrop-blur">
                          <Clock className="h-3 w-3 mr-1" />
                          {recipe.prepTime}
                        </Badge>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 flex gap-2">
                        <Badge variant="secondary" className="backdrop-blur">
                          <Users className="h-3 w-3 mr-1" />
                          {recipe.servings} servings
                        </Badge>
                        <Badge className="backdrop-blur bg-green-600">
                          {recipe.cost}
                        </Badge>
                      </div>
                    </div>

                    <CardHeader>
                      <CardTitle className="text-xl">{recipe.name}</CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {recipe.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>

                    <CardContent>
                      <CardDescription className="mb-4">
                        {recipe.description}
                      </CardDescription>

                      <div className="grid grid-cols-4 gap-2 text-center text-xs mb-4 p-3 bg-secondary/20 rounded">
                        <div>
                          <div className="font-bold text-primary">{recipe.macros.calories}</div>
                          <div className="text-muted-foreground">cal</div>
                        </div>
                        <div>
                          <div className="font-bold text-primary">{recipe.macros.protein}</div>
                          <div className="text-muted-foreground">protein</div>
                        </div>
                        <div>
                          <div className="font-bold text-primary">{recipe.macros.carbs}</div>
                          <div className="text-muted-foreground">carbs</div>
                        </div>
                        <div>
                          <div className="font-bold text-primary">{recipe.macros.fat}</div>
                          <div className="text-muted-foreground">fat</div>
                        </div>
                      </div>

                      <Button 
                        className="w-full"
                        onClick={() => handleViewRecipe(recipe)}
                      >
                        View Full Recipe
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <Button size="lg" className="text-lg" asChild>
                  <a href={GUMROAD_URLS.plantReset} target="_blank" rel="noopener noreferrer">
                    Get the 21-Day Plant-Based Reset on Gumroad - $47
                  </a>
                </Button>
              </div>

              <RecipeModal 
                recipe={selectedRecipe}
                open={isModalOpen}
                onOpenChange={setIsModalOpen}
              />
            </TabsContent>

            {/* Meal Plans Tab */}
            <TabsContent value="meal-plans">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Complete Meal Plans
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Take the guesswork out of meal planning with complete weekly plans including
                  recipes, shopping lists, and prep instructions.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {mealPlans.map((plan) => (
                  <Card key={plan.name} className="hover:shadow-xl transition-all">
                    <div 
                      className="w-full h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${plan.image})` }}
                    ></div>
                    
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge>{plan.difficulty}</Badge>
                        <span className="text-2xl font-bold text-primary">{plan.cost}</span>
                      </div>
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Total Meals:</span>
                          <span className="font-semibold">{plan.meals}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Unique Recipes:</span>
                          <span className="font-semibold">{plan.recipes}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Estimated Cost:</span>
                          <span className="font-semibold">{plan.cost}/week</span>
                        </div>
                      </div>

                      <Button className="w-full" asChild>
                        <a href={GUMROAD_URLS.plantReset} target="_blank" rel="noopener noreferrer">
                          Get Meal Plan Bundle
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-16 bg-primary/5 rounded-lg p-8 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Get All Meal Plans + Bonuses
                </h3>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-start gap-3">
                    <Calendar className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <p className="font-semibold">12 Weeks of Meal Plans</p>
                      <p className="text-sm text-muted-foreground">Never run out of ideas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ShoppingCart className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <p className="font-semibold">Done-for-You Shopping Lists</p>
                      <p className="text-sm text-muted-foreground">Organized by store section</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <p className="font-semibold">Batch Cooking Guides</p>
                      <p className="text-sm text-muted-foreground">2-hour meal prep sessions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Leaf className="h-6 w-6 text-primary shrink-0" />
                    <div>
                      <p className="font-semibold">Substitution Charts</p>
                      <p className="text-sm text-muted-foreground">Work with what you have</p>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Button size="lg" className="text-lg" asChild>
                    <a href={GUMROAD_URLS.plantReset} target="_blank" rel="noopener noreferrer">
                      Get the 21-Day Plant-Based Reset - $47
                    </a>
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* DMV Shopping Guide Tab */}
            <TabsContent value="shopping">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  <MapPin className="inline h-8 w-8 text-primary mb-1" /> Best Places to Shop in the DMV
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Your guide to finding quality, affordable organic and plant-based foods
                  throughout DC, Maryland, and Virginia.
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {storeTypes.map((type) => (
                  <Button
                    key={type}
                    size="sm"
                    variant={selectedStoreType === type ? "default" : "outline"}
                    onClick={() => setSelectedStoreType(type)}
                  >
                    {type}
                  </Button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {filteredStores.map((store) => (
                  <Card key={store.name} className="hover:shadow-lg transition-all">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg mb-1">{store.name}</CardTitle>
                          <Badge variant="outline">{store.type}</Badge>
                        </div>
                        <ShoppingCart className="h-6 w-6 text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground mb-1">Locations:</p>
                          <p className="text-sm">{store.locations}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground mb-1">Highlight:</p>
                          <p className="text-sm">{store.highlight}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-muted-foreground mb-1">Best For:</p>
                          <p className="text-sm">{store.bestFor}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-16 max-w-4xl mx-auto">
                <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      💰 Budget Shopping Tips for the DMV
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-sm font-bold">
                          1
                        </div>
                        <div>
                          <p className="font-semibold">Shop MOM's Bulk Section</p>
                          <p className="text-sm text-muted-foreground">
                            Save 30-50% on grains, beans, nuts, and spices by buying in bulk
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-sm font-bold">
                          2
                        </div>
                        <div>
                          <p className="font-semibold">Hit Farmers Markets on Sunday Afternoons</p>
                          <p className="text-sm text-muted-foreground">
                            Vendors often discount produce toward closing time
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-sm font-bold">
                          3
                        </div>
                        <div>
                          <p className="font-semibold">Use Whole Foods Amazon Prime Discounts</p>
                          <p className="text-sm text-muted-foreground">
                            Prime members get extra discounts on sale items
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-sm font-bold">
                          4
                        </div>
                        <div>
                          <p className="font-semibold">Stock Up at H Mart</p>
                          <p className="text-sm text-muted-foreground">
                            Amazing prices on tofu, mushrooms, seaweed, and Asian greens
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center shrink-0 text-sm font-bold">
                          5
                        </div>
                        <div>
                          <p className="font-semibold">Join Costco for Organic Staples</p>
                          <p className="text-sm text-muted-foreground">
                            Best prices on organic quinoa, olive oil, nuts, and frozen berries
                          </p>
                        </div>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Guides Tab */}
            <TabsContent value="guides">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold mb-4">
                  Free Meal Prep Guides
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Download these free resources to kickstart your meal prep journey
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <Card className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle>Beginner's Meal Prep Guide</CardTitle>
                    <CardDescription>
                      Everything you need to start meal prepping, including container recommendations,
                      storage tips, and a simple 2-hour meal prep routine.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" asChild>
                      <a href="https://askdogoodassets.blob.core.windows.net/downloads/21-day-reset-guide.pdf" target="_blank" rel="noopener noreferrer">
                        Download Free PDF
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle>Anti-Inflammatory Food List</CardTitle>
                    <CardDescription>
                      Comprehensive list of healing foods to reduce inflammation, organized by
                      category with benefits and serving suggestions.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" asChild>
                      <a href="https://askdogoodassets.blob.core.windows.net/downloads/anti-inflammatory-foods.pdf" target="_blank" rel="noopener noreferrer">
                        Download Free PDF
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle>Budget Grocery Shopping Checklist</CardTitle>
                    <CardDescription>
                      Save money while eating healthy with this strategic shopping list and
                      money-saving tips specifically for plant-based eating.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" asChild>
                      <a href="https://askdogoodassets.blob.core.windows.net/downloads/budget-grocery-checklist.pdf" target="_blank" rel="noopener noreferrer">
                        Download Free PDF
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle>Meal Prep Container Guide</CardTitle>
                    <CardDescription>
                      Which containers to buy, how to organize your fridge, and proper food
                      storage techniques to keep meals fresh all week.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full" asChild>
                      <a href="https://askdogoodassets.blob.core.windows.net/downloads/meal-prep-container-guide.pdf" target="_blank" rel="noopener noreferrer">
                        Download Free PDF
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-16 bg-primary text-primary-foreground rounded-lg p-12 max-w-4xl mx-auto text-center">
                <h3 className="text-3xl font-bold mb-4">
                  Want 1-on-1 Meal Prep Coaching?
                </h3>
                <p className="text-xl mb-6 opacity-90">
                  Join me for in-person or virtual meal prep workshops in the DMV area
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="text-lg" asChild>
                    <a href="mailto:askdogood@gmail.com?subject=Meal%20Prep%20Workshop%20Inquiry">
                      Book a Workshop - $75
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                    <a href={GUMROAD_URLS.mealPrepDeposit} target="_blank" rel="noopener noreferrer">
                      Private Coaching - $97
                    </a>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}