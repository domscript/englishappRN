import {Image, View, StyleSheet} from 'react-native';

// TODO . make plural 'chairs' ...

const NewImage = ({
  src,
  resizeMode,
  style,
}: {
  src: string;
  resizeMode: 'center' | 'contain' | 'cover' | 'stretch' | 'repeat';
  style?: {};
}) => {
  let url;
  switch (src) {
    case 'dog_face_active':
      url = require('./dog_face_active.webp');
      break;
    case 'slightly_smiling-face':
    case 'i':
      url = require('./slightly_smiling-face.webp');
      break;
    case 'waving-hand':
      url = require('./waving-hand.webp');
      break;
    // Verb be
    case 'be':
    case 'am':
    case 'is':
    case 'are':
    case 'was':
    case 'were':
      url = require('./be/be.webp');
      break;
    case 'hebe':
      url = require('./be/hebe.webp');
      break;
    case 'ibe':
      url = require('./be/ibe.webp');
      break;
    case 'itbe':
      url = require('./be/itbe.webp');
      break;
    case 'shebe':
      url = require('./be/shebe.webp');
      break;
    case 'theybe':
      url = require('./be/theybe.webp');
      break;
    case 'webe':
      url = require('./be/webe.webp');
      break;
    case 'yoube':
      url = require('./be/yoube.webp');
      break;
    case 'here':
      url = require('./be/here.webp');
      break;
    case 'there':
      url = require('./be/there.webp');
      break;
    /////////
    // Prepositions
    case 'at':
      url = require('./Prepositions/at.webp');
      break;
    case 'in':
      url = require('./Prepositions/in.webp');
      break;
    case 'on':
      url = require('./Prepositions/on.webp');
      break;
    case 'out':
      url = require('./Prepositions/out.webp');
      break;
    case 'to':
      url = require('./Prepositions/to.webp');
      break;

    // Question Words
    case 'how':
      url = require('./QuestionWords/how.webp');
      break;
    case 'what':
      url = require('./QuestionWords/what.webp');
      break;
    case 'when':
      url = require('./QuestionWords/when.webp');
      break;
    case 'where':
      url = require('./QuestionWords/where.webp');
      break;
    case 'who':
      url = require('./QuestionWords/who.webp');
      break;
    case 'why':
      url = require('./QuestionWords/why.webp');
      break;
    //////////////
    //////////////
    //////////////
    // Drinks
    case 'beer':
      url = require('./Drinks/beer.webp');
      break;
    case 'boba tea':
      url = require('./Drinks/boba_tea.webp');
      break;
    case 'cocktail':
      url = require('./Drinks/cocktail.webp');
      break;
    case 'drink ':
      url = require('./Drinks/drink.webp');
      break;
    case 'juice box':
      url = require('./Drinks/juice_box.webp');
      break;
    case 'maté':
      url = require('./Drinks/mate.webp');
      break;
    case 'milk':
      url = require('./Drinks/milk.webp');
      break;
    case 'tea':
      url = require('./Drinks/tea.webp');
      break;
    case 'tropical drink':
      url = require('./Drinks/tropical_drink.webp');
      break;
    case 'wine':
      url = require('./Drinks/wine.webp');
      break;
    case 'glass of hot chocolate':
      url = require('./Drinks/glass_of_hot_chocolate.webp');
      break;
    case 'glass of juice':
      url = require('./Drinks/glass_of_juice.webp');
      break;
    case 'glass of milk':
      url = require('./Drinks/glass_of_milk.webp');
      break;
    case 'glass of water':
      url = require('./Drinks/glass_of_water.webp');
      break;
    //////////////
    //////////////
    //////////////

    // Food
    case 'bacon':
      url = require('./Food/bacon.webp');
      break;
    case 'beans':
      url = require('./Food/beans.webp');
      break;
    case 'bone':
      url = require('./Food/bone.webp');
      break;
    case 'burrito':
      url = require('./Food/burrito.webp');
      break;
    case 'butter':
      url = require('./Food/butter.webp');
      break;
    case 'candy':
      url = require('./Food/candy.webp');
      break;
    case 'cheese':
      url = require('./Food/cheese.webp');
      break;
    case 'chestnut':
      url = require('./Food/chestnut.webp');
      break;
    case 'chocolate bar':
      url = require('./Food/chocolate_bar.webp');
      break;
    case 'cooked rice':
      url = require('./Food/cooked_rice.webp');
      break;
    case 'curry and rice':
      url = require('./Food/curry_and_rice.webp');
      break;
    case 'custard':
      url = require('./Food/custard.webp');
      break;
    case 'dango':
      url = require('./Food/dango.webp');
      break;
    case 'dumpling':
      url = require('./Food/dumpling.webp');
      break;
    case 'egg':
      url = require('./Food/egg.webp');
      break;
    case 'falafel':
      url = require('./Food/falafel.webp');
      break;
    case 'fondue':
      url = require('./Food/fondue.webp');
      break;
    case 'fortune cookie':
      url = require('./Food/fortune_cookie.webp');
      break;
    case 'french fries':
      url = require('./Food/french_fries.webp');
      break;
    case 'fried shrimp':
      url = require('./Food/fried_shrimp.webp');
      break;
    case 'green salad':
      url = require('./Food/green_salad.webp');
      break;
    case 'hamburger':
    case 'hamburgers':
      url = require('./Food/hamburger.webp');
      break;
    case 'honey':
    case 'honey pot':
      url = require('./Food/honey_pot.webp');
      break;
    case 'hot dog':
      url = require('./Food/hot_dog.webp');
      break;
    case 'ice cream':
      url = require('./Food/ice_cream.webp');
      break;
    case 'ice':
      url = require('./Food/ice.webp');
      break;
    case 'lollipop':
      url = require('./Food/lollipop.webp');
      break;
    case 'oden':
      url = require('./Food/oden.webp');
      break;
    case 'oyster':
      url = require('./Food/oyster.webp');
      break;
    case 'peanuts':
      url = require('./Food/peanuts.webp');
      break;
    case 'pita sandwich':
      url = require('./Food/pita_sandwich.webp');
      break;
    case 'pizza':
      url = require('./Food/pizza.webp');
      break;
    case 'popcorn':
      url = require('./Food/popcorn.webp');
      break;
    case 'poultry leg':
      url = require('./Food/poultry_leg.webp');
      break;
    case 'rice ball':
      url = require('./Food/rice_ball.webp');
      break;
    case 'rice cracker':
      url = require('./Food/rice_cracker.webp');
      break;
    case 'salt':
      url = require('./Food/salt.webp');
      break;
    case 'sandwich':
      url = require('./Food/sandwich.webp');
      break;
    case 'shaved ice':
      url = require('./Food/shaved_ice.webp');
      break;
    case 'soft ice cream':
      url = require('./Food/soft_ice_cream.webp');
      break;
    case 'spaghetti':
      url = require('./Food/spaghetti.webp');
      break;
    case 'steak':
      url = require('./Food/steak.webp');
      break;
    case 'sushi':
      url = require('./Food/sushi.webp');
      break;
    case 'taco':
      url = require('./Food/taco.webp');
      break;
    case 'tamale':
      url = require('./Food/tamale.webp');
      break;
    //////////////
    //////////////
    //////////////

    //////////////
    //////////////
    //////////////

    // study subs
    case 'cooking':
      url = require('./cooking.webp');
      break;

    // Instruments Mechanisms Tools
    case 'abacus':
      url = require('./InstrumentsMechanismsTools/abacus.webp');
      break;
    case 'alarm clock':
      url = require('./InstrumentsMechanismsTools/alarm_clock.webp');
      break;
    case 'anchor':
      url = require('./InstrumentsMechanismsTools/anchor.webp');
      break;
    case 'axe':
      url = require('./InstrumentsMechanismsTools/axe.webp');
      break;
    case 'boomerang':
      url = require('./InstrumentsMechanismsTools/boomerang.webp');
      break;
    case 'broom':
      url = require('./InstrumentsMechanismsTools/broom.webp');
      break;
    case 'bucket':
      url = require('./InstrumentsMechanismsTools/bucket.webp');
      break;
    case 'compass':
      url = require('./InstrumentsMechanismsTools/compass.webp');
      break;
    case 'construction sign':
      url = require('./InstrumentsMechanismsTools/construction_sign.webp');
      break;
    case 'dagger':
      url = require('./InstrumentsMechanismsTools/dagger.webp');
      break;
    case 'fire extinguisher':
      url = require('./InstrumentsMechanismsTools/fire_extinguisher.webp');
      break;
    case 'flashlight':
      url = require('./InstrumentsMechanismsTools/flashlight.webp');
      break;
    case 'gear':
      url = require('./InstrumentsMechanismsTools/gear.webp');
      break;
    case 'hammer':
      url = require('./InstrumentsMechanismsTools/hammer.webp');
      break;
    case 'hand saw':
      url = require('./InstrumentsMechanismsTools/hand_saw.webp');
      break;
    case 'hook':
      url = require('./InstrumentsMechanismsTools/hook.webp');
      break;
    case 'hourglass':
      url = require('./InstrumentsMechanismsTools/hourglass.webp');
      break;
    case 'key':
      url = require('./InstrumentsMechanismsTools/key.webp');
      break;
    case 'ladder':
      url = require('./InstrumentsMechanismsTools/ladder.webp');
      break;
    case 'magic wand':
      url = require('./InstrumentsMechanismsTools/magic_wand.webp');
      break;
    case 'magnifying glass':
      url = require('./InstrumentsMechanismsTools/magnifying_glass.webp');
      break;
    case 'microphone':
      url = require('./InstrumentsMechanismsTools/microphone.webp');
      break;
    case 'microscope':
      url = require('./InstrumentsMechanismsTools/microscope.webp');
      break;
    case 'mirror':
      url = require('./InstrumentsMechanismsTools/mirror.webp');
      break;
    case 'paperclip':
      url = require('./InstrumentsMechanismsTools/paperclip.webp');
      break;
    case 'pick':
      url = require('./InstrumentsMechanismsTools/pick.webp');
      break;
    case 'plunger':
      url = require('./InstrumentsMechanismsTools/plunger.webp');
      break;
    case 'safety pin':
      url = require('./InstrumentsMechanismsTools/safety_pin.webp');
      break;
    case 'satellite antenna':
      url = require('./InstrumentsMechanismsTools/satellite_antenna.webp');
      break;
    case 'scales':
      url = require('./InstrumentsMechanismsTools/scales.webp');
      break;
    case 'scissors':
      url = require('./InstrumentsMechanismsTools/scissors.webp');
      break;
    case 'screwdriver':
      url = require('./InstrumentsMechanismsTools/screwdriver.webp');
      break;
    case 'sewing needle':
      url = require('./InstrumentsMechanismsTools/sewing_needle.webp');
      break;
    case 'shield':
      url = require('./InstrumentsMechanismsTools/shield.webp');
      break;
    case 'stopwatch':
      url = require('./InstrumentsMechanismsTools/stopwatch.webp');
      break;
    case 'straight ruler':
      url = require('./InstrumentsMechanismsTools/straight_ruler.webp');
      break;
    case 'sword':
      url = require('./InstrumentsMechanismsTools/sword.webp');
      break;
    case 'telescope':
      url = require('./InstrumentsMechanismsTools/telescope.webp');
      break;
    case 'test tube':
      url = require('./InstrumentsMechanismsTools/test_tube.webp');
      break;
    case 'thread':
      url = require('./InstrumentsMechanismsTools/thread.webp');
      break;
    case 'timer clock':
      url = require('./InstrumentsMechanismsTools/timer_clock.webp');
      break;
    case 'toolbox':
      url = require('./InstrumentsMechanismsTools/toolbox.webp');
      break;
    case 'traffic light':
      url = require('./InstrumentsMechanismsTools/traffic_light.webp');
      break;
    case 'triangular ruler':
      url = require('./InstrumentsMechanismsTools/triangular_ruler.webp');
      break;
    case 'wrench':
      url = require('./InstrumentsMechanismsTools/wrench.webp');
      break;
    case 'yarn':
      url = require('./InstrumentsMechanismsTools/yarn.webp');
      break;
    //////////////
    //////////////
    //////////////

    // Medical
    case 'adhesive bandage':
      url = require('./Medical/adhesive_bandage.webp');
      break;
    case 'DNA':
      url = require('./Medical/DNA.webp');
      break;
    case 'microbe':
      url = require('./Medical/microbe.webp');
      break;
    case 'pill':
      url = require('./Medical/pill.webp');
      break;
    case 'stethoscope':
      url = require('./Medical/stethoscope.webp');
      break;
    case 'syringe':
      url = require('./Medical/syringe.webp');
      break;
    case 'thermometer':
      url = require('./Medical/thermometer.webp');
      break;
    case 'X-ray':
      url = require('./Medical/X-ray.webp');
      break;
    //////////////
    //////////////
    //////////////

    // Flora
    case 'bouquet':
      url = require('./Flora/bouquet.webp');
      break;
    case 'cactus':
      url = require('./Flora/cactus.webp');
      break;
    case 'Christmas tree':
      url = require('./Flora/Christmas_tree.webp');
      break;
    case 'coral':
      url = require('./Flora/coral.webp');
      break;
    case 'evergreen tree':
      url = require('./Flora/evergreen_tree.webp');
      break;
    case 'flower':
      url = require('./Flora/flower.webp');
      break;
    case 'herb':
      url = require('./Flora/herb.webp');
      break;
    case 'hibiscus':
      url = require('./Flora/hibiscus.webp');
      break;
    case 'lotus':
      url = require('./Flora/lotus.webp');
      break;
    case 'mushroom':
      url = require('./Flora/mushroom.webp');
      break;
    case 'palm tree':
      url = require('./Flora/palm_tree.webp');
      break;
    case 'potted plant':
      url = require('./Flora/potted_plant.webp');
      break;
    case 'rose':
      url = require('./Flora/rose.webp');
      break;
    case 'seedling':
      url = require('./Flora/seedling.webp');
      break;
    case 'sunflower':
      url = require('./Flora/sunflower.webp');
      break;
    case 'tree':
      url = require('./Flora/tree.webp');
      break;
    case 'tulip':
      url = require('./Flora/tulip.webp');
      break;
    //////////////
    //////////////
    //////////////

    // Accessories
    case 'backpack':
      url = require('./Accessories/backpack.webp');
      break;
    case 'boxing glove':
      url = require('./Accessories/boxing_glove.webp');
      break;
    case 'briefcase':
      url = require('./Accessories/briefcase.webp');
      break;
    case 'crown':
      url = require('./Accessories/crown.webp');
      break;
    case 'diving mask':
      url = require('./Accessories/diving_mask.webp');
      break;
    case 'glasses':
      url = require('./Accessories/glasses.webp');
      break;
    case 'goggles':
      url = require('./Accessories/goggles.webp');
      break;
    case 'helmet':
      url = require('./Accessories/helmet.webp');
      break;
    case 'luggage':
      url = require('./Accessories/luggage.webp');
      break;
    case 'military helmet':
      url = require('./Accessories/military_helmet.webp');
      break;
    case 'pouch':
      url = require('./Accessories/pouch.webp');
      break;
    case 'purse':
      url = require('./Accessories/purse.webp');
      break;
    case 'razor':
      url = require('./Accessories/razor.webp');
      break;
    case 'ribbon bow':
      url = require('./Accessories/ribbon_bow.webp');
      break;
    case 'ring':
      url = require('./Accessories/ring.webp');
      break;
    case 'sunglasses':
      url = require('./Accessories/sunglasses.webp');
      break;
    case 'toothbrush':
      url = require('./Accessories/toothbrush.webp');
      break;
    //////////////
    //////////////
    //////////////

    // Places
    case 'basement':
      url = require('./Places/basement.webp');
      break;
    case 'bedroom':
      url = require('./Places/bedroom.webp');
      break;
    case 'cinema':
      url = require('./Places/cinema.webp');
      break;
    case 'home':
      url = require('./Places/home.webp');
      break;
    case 'kitchen':
      url = require('./Places/kitchen.webp');
      break;
    case 'office':
      url = require('./Places/office.webp');
      break;
    case 'room':
      url = require('./Places/room.webp');
      break;
    case 'work':
      url = require('./Places/work.webp');
      break;
    //////////////
    //////////////
    //////////////

    // Events
    case 'Carnaval':
      url = require('./Events/carnaval.webp');
      break;
    case 'Concert':
      url = require('./Events/concert.webp');
      break;
    case 'Exhibition':
      url = require('./Events/exhibition.webp');
      break;
    case 'Fashion Show':
      url = require('./Events/fashion_show.webp');
      break;
    case 'Meeting':
      url = require('./Events/meeting.webp');
      break;
    case 'Presentation':
      url = require('./Events/presentation.webp');
      break;
    //////////////
    //////////////
    //////////////

    // Buildings
    case 'bank':
      url = require('./Buildings/bank.webp');
      break;
    case 'castle':
      url = require('./Buildings/castle.webp');
      break;
    case 'church':
      url = require('./Buildings/church.webp');
      break;
    case 'circus':
      url = require('./Buildings/circus_tent.webp');
      break;
    case 'convenience store':
      url = require('./Buildings/convenience_store.webp');
      break;
    case 'department store':
      url = require('./Buildings/department_store.webp');
      break;
    case 'factory':
      url = require('./Buildings/factory.webp');
      break;
    case 'hospital':
      url = require('./Buildings/hospital.webp');
      break;
    case 'hotel':
      url = require('./Buildings/hotel.webp');
      break;
    case 'house':
      url = require('./Buildings/house.webp');
      break;
    case 'mosque':
      url = require('./Buildings/mosque.webp');
      break;
    case 'museum':
      url = require('./Buildings/museum.webp');
      break;
    case 'post office':
      url = require('./Buildings/post_office.webp');
      break;
    case 'school':
      url = require('./Buildings/school.webp');
      break;
    case 'stadium':
      url = require('./Buildings/stadium.webp');
      break;
    case 'synagogue':
      url = require('./Buildings/synagogue.webp');
      break;
    case 'theater':
      url = require('./Buildings/theater.webp');
      break;
    //////////////
    //////////////
    //////////////
    // Flags
    case 'Argentina':
      url = require('./Flags/Argentina.webp');
      break;
    case 'Australia':
      url = require('./Flags/Australia.webp');
      break;
    case 'Canada':
      url = require('./Flags/Canada.webp');
      break;
    case 'China':
    case 'Chinese':
      url = require('./Flags/China.webp');
      break;
    case 'France':
    case 'French':
      url = require('./Flags/France.webp');
      break;
    case 'Germany':
    case 'German':
      url = require('./Flags/Germany.webp');
      break;
    case 'India':
      url = require('./Flags/India.webp');
      break;
    case 'Japan':
    case 'Japanese':
      url = require('./Flags/Japan.webp');
      break;
    case 'Panama':
      url = require('./Flags/Panama.webp');
      break;
    case 'South Korea':
    case 'Korean':
      url = require('./Flags/South_Korea.webp');
      break;
    case 'Spain':
    case 'Spanish':
      url = require('./Flags/Spain.webp');
      break;
    case 'Thailand':
    case 'Thai':
      url = require('./Flags/Thailand.webp');
      break;
    case 'the UK':
    case 'English':
      url = require('./Flags/the_United_Kingdom.webp');
      break;
    case 'the USA':
      url = require('./Flags/the_United_States.webp');
      break;
    //////////////
    //////////////
    //////////////

    // Electronics
    case 'headphones':
      url = require('./Electronics/headphones.webp');
      break;
    case 'laptop':
      url = require('./Electronics/laptop.webp');
      break;
    case 'printer':
      url = require('./Electronics/printer.webp');
      break;
    case 'smart_phone':
    case 'phone':
      url = require('./Electronics/smart_phone.webp');
      break;
    case 'video camera':
      url = require('./Electronics/video_camera.webp');
      break;
    case 'watch':
      url = require('./Electronics/watch.webp');
      break;
    //////////////
    //////////////
    //////////////

    // Music
    case 'accordion':
      url = require('./Music/accordion.webp');
      break;
    case 'banjo':
      url = require('./Music/banjo.webp');
      break;
    case 'drum':
      url = require('./Music/drum.webp');
      break;
    case 'guitar':
      url = require('./Music/guitar.webp');
      break;
    case 'saxophone':
      url = require('./Music/saxophone.webp');
      break;
    case 'trumpet':
      url = require('./Music/trumpet.webp');
      break;
    case 'violin':
      url = require('./Music/violin.webp');
      break;
    //////////////
    //////////////
    //////////////

    // Super
    case 'id':
      url = require('./id.webp');
      break;
    case 'credit card':
      url = require('./credit_card.webp');
      break;
    case 'money':
      url = require('./money.webp');
      break;
    case 'ticket':
      url = require('./ticket.webp');
      break;
    case 'man':
      url = require('./man.webp');
      break;
    case 'woman':
      url = require('./woman.webp');
      break;
    case 'toilet':
      url = require('./toilet.webp');
      break;
    //////////////
    //////////////
    //////////////
    case 'seat':
      url = require('./seat.webp');
      break;
    case 'couch':
      url = require('./couch.webp');
      break;
    case 'bag':
      url = require('./bag.webp');
      break;
    case 'bed':
      url = require('./bed.webp');
      break;
    case 'book':
      url = require('./book.webp');
      break;
    case 'text':
      url = require('./text.webp');
      break;
    case 'newspaper':
      url = require('./newspaper.webp');
      break;
    case 'box':
      url = require('./box.webp');
      break;
    case 'chair':
    case 'chairs':
      url = require('./chair.webp');
      break;
    case 'door':
      url = require('./door.webp');
      break;
    case 'floor':
      url = require('./floor.webp');
      break;
    case 'folder':
      url = require('./folder.webp');
      break;
    case 'letter':
      url = require('./letter.webp');
      break;
    case 'message':
      url = require('./message.webp');
      break;
    case 'pen':
      url = require('./pen.webp');
      break;
    case 'pencil':
      url = require('./pencil.webp');
      break;
    case 'table':
      url = require('./table.webp');
      break;
    case 'umbrella':
      url = require('./umbrella.webp');
      break;
    case 'wall':
      url = require('./wall.webp');
      break;
    case 'window':
      url = require('./window.webp');
      break;
    //////////////
    //////////////
    //////////////

    // Green Food
    case 'apple':
    case 'apples':
      url = require('./Green_Food/apple.webp');
      break;
    case 'avocado':
      url = require('./Green_Food/avocado.webp');
      break;
    case 'banana':
    case 'bananas':
      url = require('./Green_Food/banana.webp');
      break;
    case 'bell pepper':
      url = require('./Green_Food/bell_pepper.webp');
      break;
    case 'blueberries':
      url = require('./Green_Food/blueberries.webp');
      break;
    case 'broccoli':
      url = require('./Green_Food/broccoli.webp');
      break;
    case 'carrot':
    case 'carrots':
      url = require('./Green_Food/carrot.webp');
      break;
    case 'cherries':
      url = require('./Green_Food/cherries.webp');
      break;
    case 'coconut':
      url = require('./Green_Food/coconut.webp');
      break;
    case 'eggplant':
      url = require('./Green_Food/eggplant.webp');
      break;
    case 'corn':
      url = require('./Green_Food/corn.webp');
      break;
    case 'cucumber':
      url = require('./Green_Food/cucumber.webp');
      break;
    case 'garlic':
      url = require('./Green_Food/garlic.webp');
      break;
    case 'grapes':
      url = require('./Green_Food/grapes.webp');
      break;
    case 'hot pepper':
      url = require('./Green_Food/hot_pepper.webp');
      break;
    case 'kiwi':
      url = require('./Green_Food/kiwi.webp');
      break;
    case 'lemon':
      url = require('./Green_Food/lemon.webp');
      break;
    case 'mango':
      url = require('./Green_Food/mango.webp');
      break;
    case 'melon':
      url = require('./Green_Food/melon.webp');
      break;
    case 'olive':
      url = require('./Green_Food/olive.webp');
      break;
    case 'onion':
    case 'onions':
      url = require('./Green_Food/onion.webp');
      break;
    case 'peach':
      url = require('./Green_Food/peach.webp');
      break;
    case 'pear':
    case 'pears':
      url = require('./Green_Food/pear.webp');
      break;
    case 'pineapple':
    case 'pineapples':
      url = require('./Green_Food/pineapple.webp');
      break;
    case 'potato':
    case 'potatoes':
      url = require('./Green_Food/potato.webp');
      break;
    case 'strawberry':
    case 'strawberries':
      url = require('./Green_Food/strawberry.webp');
      break;
    case 'sweet potato':
      url = require('./Green_Food/sweet_potato.webp');
      break;
    case 'tangerine':
    case 'tangerines':
      url = require('./Green_Food/tangerine.webp');
      break;
    case 'tomato':
    case 'tomatoes':
      url = require('./Green_Food/tomato.webp');
      break;
    case 'watermelon':
    case 'watermelons':
      url = require('./Green_Food/watermelon.webp');
      break;
    //////////////
    //////////////
    //////////////

    // Professions
    case 'accountant':
    case 'auditor':
      url = require('./Professions/accountant.webp');
      break;
    case 'actor':
      url = require('./Professions/actor.webp');
      break;
    case 'artist':
      url = require('./Professions/artist.webp');
      break;
    case 'astronaut':
      url = require('./Professions/astronaut.webp');
      break;
    case 'baker':
      url = require('./Professions/baker.webp');
      break;
    case 'builder':
    case 'laborer':
      url = require('./Professions/builder.webp');
      break;
    case 'cardiologist':
      url = require('./Professions/cardiologist.webp');
      break;
    case 'cleaner':
      url = require('./Professions/cleaner.webp');
      break;
    case 'cleaner':
      url = require('./Professions/cleaner.webp');
      break;
    case 'construction electrician':
      url = require('./Professions/construction_electrician.webp');
      break;
    case 'construction engineer':
      url = require('./Professions/construction_engineer.webp');
      break;
    case 'firefighter inspector':
      url = require('./Professions/firefighter_inspector.webp');
      break;
    case 'safety inspector':
      url = require('./Professions/safety_inspector.webp');
      break;
    case 'cook':
    case 'chef':
      url = require('./Professions/cook.webp');
      break;
    case 'dentist':
      url = require('./Professions/dentist.webp');
      break;
    case 'designer':
      url = require('./Professions/designer.webp');
      break;
    case 'detective':
      url = require('./Professions/detective.webp');
      break;
    case 'doctor':
      url = require('./Professions/doctor.webp');
      break;
    case 'driver':
      url = require('./Professions/driver.webp');
      break;
    case 'engineer':
      url = require('./Professions/engineer.webp');
      break;
    case 'farmer':
      url = require('./Professions/farmer.webp');
      break;
    case 'firefighter':
      url = require('./Professions/firefighter.webp');
      break;
    case 'historian':
      url = require('./Professions/historian.webp');
      break;
    case 'guide':
      url = require('./Professions/guide.webp');
      break;
    case 'interpreter':
      url = require('./Professions/interpreter.webp');
      break;
    case 'judge':
      url = require('./Professions/judge.webp');
      break;
    case 'lawyer':
    case 'attorney':
      url = require('./Professions/lawyer.webp');
      break;
    case 'mechanic':
      url = require('./Professions/mechanic.webp');
      break;
    case 'musician':
      url = require('./Professions/musician.webp');
      break;
    case 'nurse':
      url = require('./Professions/nurse.webp');
      break;
    case 'nutritionist':
      url = require('./Professions/nutritionist.webp');
      break;
    case 'office clerk':
      url = require('./Professions/office_clerk.webp');
      break;
    case 'orthopedist':
      url = require('./Professions/orthopedist.webp');
      break;
    case 'pilot':
      url = require('./Professions/pilot.webp');
      break;
    case 'police officer':
      url = require('./Professions/police_officer.webp');
      break;
    case 'programmer':
      url = require('./Professions/programmer.webp');
      break;
    case 'receptionist':
      url = require('./Professions/receptionist.webp');
      break;
    case 'scientist':
    case 'researcher':
      url = require('./Professions/scientist.webp');
      break;
    case 'singer':
      url = require('./Professions/singer.webp');
      break;
    case 'social worker':
      url = require('./Professions/social_worker.webp');
      break;
    case 'student':
      url = require('./Professions/student.webp');
      break;
    case 'taxi driver':
      url = require('./Professions/taxi_driver.webp');
      break;
    case 'teacher':
    case 'professor':
      url = require('./Professions/teacher.webp');
      break;
    case 'technologist':
      url = require('./Professions/technologist.webp');
      break;
    case 'truck driver':
      url = require('./Professions/truck_driver.webp');
      break;
    case 'welder':
      url = require('./Professions/welder.webp');
      break;
    case 'writer':
    case 'author':
      url = require('./Professions/writer.webp');
      break;
    //////////////
    //////////////
    //////////////

    // Subject_Pronouns
    case 'he':
      url = require('./Pronouns/Subject_Pronouns/he.webp');
      break;
    case 'i':
      url = require('./Pronouns/Subject_Pronouns/i.webp');
      break;
    case 'it':
      url = require('./Pronouns/Subject_Pronouns/it.webp');
      break;
    case 'she':
      url = require('./Pronouns/Subject_Pronouns/she.webp');
      break;
    case 'they':
      url = require('./Pronouns/Subject_Pronouns/they.webp');
      break;
    case 'we':
      url = require('./Pronouns/Subject_Pronouns/we.webp');
      break;
    case 'you':
      url = require('./Pronouns/Subject_Pronouns/you.webp');
      break;
    //////////////
    //////////////
    //////////////

    // Pastries
    case 'bagel':
      url = require('./Pastries/bagel.webp');
      break;
    case 'baguette':
      url = require('./Pastries/baguette.webp');
      break;
    case 'birthday cake':
      url = require('./Pastries/birthday_cake.webp');
      break;
    case 'bread':
      url = require('./Pastries/bread.webp');
      break;
    case 'cookie':
    case 'cookies':
      url = require('./Pastries/cookie.webp');
      break;
    case 'croissant':
      url = require('./Pastries/croissant.webp');
      break;
    case 'cupcake':
      url = require('./Pastries/cupcake.webp');
      break;
    case 'doughnut':
      url = require('./Pastries/doughnut.webp');
      break;
    case 'flat bread':
      url = require('./Pastries/flat_bread.webp');
      break;
    case 'mooncake':
      url = require('./Pastries/mooncake.webp');
      break;
    case 'pancakes':
      url = require('./Pastries/pancakes.webp');
      break;
    case 'pie':
      url = require('./Pastries/pie.webp');
      break;
    case 'pretzel':
      url = require('./Pastries/pretzel.webp');
      break;
    case 'shortcake':
      url = require('./Pastries/shortcake.webp');
      break;
    case 'waffle':
      url = require('./Pastries/waffle.webp');
      break;
    //////////////
    //////////////
    //////////////

    // Clothes
    case 'ballet shoes':
      url = require('./Clothes/ballet_shoes.webp');
      break;
    case 'bikini':
      url = require('./Clothes/bikini.webp');
      break;
    case 'billed hat':
      url = require('./Clothes/billed_hat.webp');
      break;
    case 'blouse':
      url = require('./Clothes/blouse.webp');
      break;
    case 'briefs':
      url = require('./Clothes/briefs.webp');
      break;
    case 'coat':
      url = require('./Clothes/coat.webp');
      break;
    case 'dress':
      url = require('./Clothes/dress.webp');
      break;
    case 'dress shoe':
      url = require('./Clothes/dress_shoe.webp');
      break;
    case 'flat shoe':
      url = require('./Clothes/flat_shoe.webp');
      break;
    case 'gloves':
      url = require('./Clothes/gloves.webp');
      break;
    case 'graduation cap':
      url = require('./Clothes/graduation_cap.webp');
      break;
    case 'hat with bow':
      url = require('./Clothes/hat_with_bow.webp');
      break;
    case 'heeled boots':
      url = require('./Clothes/heeled_boots.webp');
      break;
    case 'heeled sandal':
      url = require('./Clothes/heeled_sandal.webp');
      break;
    case 'high-heeled shoe':
      url = require('./Clothes/high-heeled_shoe.webp');
      break;
    case 'hiking boot':
      url = require('./Clothes/hiking_boot.webp');
      break;
    case 'jeans':
      url = require('./Clothes/jeans.webp');
      break;
    case 'kimono':
      url = require('./Clothes/kimono.webp');
      break;
    case 'lab coat':
      url = require('./Clothes/lab_coat.webp');
      break;
    case 'martial arts uniform':
      url = require('./Clothes/martial_arts_uniform.webp');
      break;
    case 'one-piece swimsuit':
      url = require('./Clothes/one-piece_swimsuit.webp');
      break;
    case 'polo shirt':
      url = require('./Clothes/polo_shirt.webp');
      break;
    case 'running shirt':
      url = require('./Clothes/running_shirt.webp');
      break;
    case 'safety vest':
      url = require('./Clothes/safety_vest.webp');
      break;
    case 'sandal':
      url = require('./Clothes/sandal.webp');
      break;
    case 'sari':
      url = require('./Clothes/sari.webp');
      break;
    case 'scarf':
      url = require('./Clothes/scarf.webp');
      break;
    case 'shorts':
      url = require('./Clothes/shorts.webp');
      break;
    case 'socks':
      url = require('./Clothes/socks.webp');
      break;
    case 'tennis shoe':
      url = require('./Clothes/tennis_shoe.webp');
      break;
    case 'top hat':
      url = require('./Clothes/top_hat.webp');
      break;
    //////////////
    //////////////
    //////////////

    // Utensils
    case 'baby bottle':
      url = require('./Utensils/baby_bottle.webp');
      break;
    case 'bowl':
      url = require('./Utensils/bowl.webp');
      break;
    case 'chopsticks':
      url = require('./Utensils/chopsticks.webp');
      break;
    case 'fork':
      url = require('./Utensils/fork.webp');
      break;
    case 'jar':
      url = require('./Utensils/jar.webp');
      break;
    case 'knife':
      url = require('./Utensils/knife.webp');
      break;
    case 'plate':
      url = require('./Utensils/plate.webp');
      break;
    case 'spoon':
      url = require('./Utensils/spoon.webp');
      break;
    case 'table knife':
      url = require('./Utensils/table_knife.webp');
      break;
    case 'teapot':
      url = require('./Utensils/teapot.webp');
      break;
    //////////////
    //////////////
    //////////////

    // Transport
    case 'airplane':
      url = require('./Transport/airplane.webp');
      break;
    case 'ambulance':
      url = require('./Transport/ambulance.webp');
      break;
    case 'bicycle':
      url = require('./Transport/bicycle.webp');
      break;
    case 'bus':
      url = require('./Transport/bus.webp');
      break;
    case 'car':
      url = require('./Transport/car.webp');
      break;
    case 'delivery truck':
      url = require('./Transport/delivery_truck.webp');
      break;
    case 'ferry':
      url = require('./Transport/ferry.webp');
      break;
    case 'fire engine':
      url = require('./Transport/fire_engine.webp');
      break;
    case 'helicopter':
      url = require('./Transport/helicopter.webp');
      break;
    case 'ice skate':
      url = require('./Transport/ice_skate.webp');
      break;
    case 'minibus':
      url = require('./Transport/minibus.webp');
      break;
    case 'motor scooter':
      url = require('./Transport/motor_scooter.webp');
      break;
    case 'motorboat':
      url = require('./Transport/motorboat.webp');
      break;
    case 'motorcycle':
      url = require('./Transport/motorcycle.webp');
      break;
    case 'passenger ship':
      url = require('./Transport/passenger_ship.webp');
      break;
    case 'pickup truck':
      url = require('./Transport/pickup_truck.webp');
      break;
    case 'police car':
      url = require('./Transport/police_car.webp');
      break;
    case 'race car':
      url = require('./Transport/race_car.webp');
      break;
    case 'rocket':
      url = require('./Transport/rocket.webp');
      break;
    case 'roller skate':
      url = require('./Transport/roller_skate.webp');
      break;
    case 'sailboat':
      url = require('./Transport/sailboat.webp');
      break;
    case 'scooter':
      url = require('./Transport/scooter.webp');
      break;
    case 'semi-truck':
      url = require('./Transport/semi-truck.webp');
      break;
    case 'ship':
      url = require('./Transport/ship.webp');
      break;
    case 'skateboard':
      url = require('./Transport/skateboard.webp');
      break;
    case 'sled':
      url = require('./Transport/sled.webp');
      break;
    case 'small airplane':
      url = require('./Transport/small_airplane.webp');
      break;
    case 'speedboat':
      url = require('./Transport/speedboat.webp');
      break;
    case 'SUV':
      url = require('./Transport/suv.webp');
      break;
    case 'taxi':
      url = require('./Transport/taxi.webp');
      break;
    case 'tractor':
      url = require('./Transport/tractor.webp');
      break;
    case 'trolleybus':
      url = require('./Transport/trolleybus.webp');
      break;
    case 'UFO':
      url = require('./Transport/UFO.webp');
      break;
    //////////////
    //////////////
    //////////////

    // Object_Pronouns
    case 'me':
      url = require('./Pronouns/Object_Pronouns/me.webp');
      break;
    case 'you ':
      url = require('./Pronouns/Object_Pronouns/you.webp');
      break;
    case 'him':
      url = require('./Pronouns/Object_Pronouns/him.webp');
      break;
    case 'her':
      url = require('./Pronouns/Object_Pronouns/her.webp');
      break;
    case 'it ':
      url = require('./Pronouns/Object_Pronouns/it.webp');
      break;
    case 'us':
      url = require('./Pronouns/Object_Pronouns/us.webp');
      break;
    case 'them':
      url = require('./Pronouns/Object_Pronouns/them.webp');
      break;

    // Possessive_Adjectives
    case 'her ':
      url = require('./Pronouns/Possessive_Adjectives/her.webp');
      break;
    case 'his':
      url = require('./Pronouns/Possessive_Adjectives/his.webp');
      break;
    case 'its':
      url = require('./Pronouns/Possessive_Adjectives/its.webp');
      break;
    case 'my':
      url = require('./Pronouns/Possessive_Adjectives/my.webp');
      break;
    case 'our':
      url = require('./Pronouns/Possessive_Adjectives/our.webp');
      break;
    case 'their':
      url = require('./Pronouns/Possessive_Adjectives/their.webp');
      break;
    case 'your':
      url = require('./Pronouns/Possessive_Adjectives/your.webp');
      break;

    //////////////
    //////////////
    //////////////

    // Family
    case 'children':
      url = require('./Family/children.webp');
      break;
    case 'daughter':
      url = require('./Family/daughter.webp');
      break;
    case 'father':
      url = require('./Family/father.webp');
      break;
    case 'family':
      url = require('./Family/family.webp');
      break;
    case 'grandfather':
      url = require('./Family/grandfather.webp');
      break;
    case 'grandmother':
      url = require('./Family/grandmother.webp');
      break;
    case 'husband':
      url = require('./Family/husband.webp');
      break;
    case 'mother':
      url = require('./Family/mother.webp');
      break;
    case 'parents':
      url = require('./Family/parents.webp');
      break;
    case 'sister':
      url = require('./Family/sister.webp');
      break;
    case 'brother':
      url = require('./Family/brother.webp');
      break;
    case 'son':
      url = require('./Family/son.webp');
      break;
    case 'wife':
      url = require('./Family/wife.webp');
      break;

    //////////////
    //////////////
    //////////////

    // Creatures
    case 'ant':
      url = require('./Creatures/ant.webp');
      break;
    case 'badger':
      url = require('./Creatures/badger.webp');
      break;
    case 'bat':
      url = require('./Creatures/bat.webp');
      break;
    case 'bear':
      url = require('./Creatures/bear.webp');
      break;
    case 'beaver':
      url = require('./Creatures/beaver.webp');
      break;
    case 'bee':
      url = require('./Creatures/bee.webp');
      break;
    case 'beetle':
      url = require('./Creatures/beetle.webp');
      break;
    case 'bison':
      url = require('./Creatures/bison.webp');
      break;
    case 'blowfish':
      url = require('./Creatures/blowfish.webp');
      break;
    case 'bug':
      url = require('./Creatures/bug.webp');
      break;
    case 'butterfly':
      url = require('./Creatures/butterfly.webp');
      break;
    case 'camel':
      url = require('./Creatures/camel.webp');
      break;
    case 'cat':
      url = require('./Creatures/cat.webp');
      break;
    case 'chick':
      url = require('./Creatures/chick.webp');
      break;
    case 'chipmunk':
      url = require('./Creatures/chipmunk.webp');
      break;
    case 'cockroach':
      url = require('./Creatures/cockroach.webp');
      break;
    case 'cow':
      url = require('./Creatures/cow.webp');
      break;
    case 'crab':
      url = require('./Creatures/crab.webp');
      break;
    case 'cricket':
      url = require('./Creatures/cricket.webp');
      break;
    case 'crocodile':
      url = require('./Creatures/crocodile.webp');
      break;
    case 'deer':
      url = require('./Creatures/deer.webp');
      break;
    case 'dinosaur':
      url = require('./Creatures/dinosaur.webp');
      break;
    case 'dodo bird':
      url = require('./Creatures/dodo_bird.webp');
      break;
    case 'dog':
      url = require('./Creatures/dog.webp');
      break;
    case 'dolphin':
      url = require('./Creatures/dolphin.webp');
      break;
    case 'dove':
      url = require('./Creatures/dove.webp');
      break;
    case 'dragon':
      url = require('./Creatures/dragon.webp');
      break;
    case 'duck':
      url = require('./Creatures/duck.webp');
      break;
    case 'eagle':
      url = require('./Creatures/eagle.webp');
      break;
    case 'elephant':
      url = require('./Creatures/elephant.webp');
      break;
    case 'fish':
      url = require('./Creatures/fish.webp');
      break;
    case 'flamingo':
      url = require('./Creatures/flamingo.webp');
      break;
    case 'fly':
      url = require('./Creatures/fly.webp');
      break;
    case 'fox':
      url = require('./Creatures/fox.webp');
      break;
    case 'giraffe':
      url = require('./Creatures/giraffe.webp');
      break;
    case 'goat':
      url = require('./Creatures/goat.webp');
      break;
    case 'gorilla':
      url = require('./Creatures/gorilla.webp');
      break;
    case 'hedgehog':
      url = require('./Creatures/hedgehog.webp');
      break;
    case 'hippo':
      url = require('./Creatures/hippo.webp');
      break;
    case 'horse':
      url = require('./Creatures/horse.webp');
      break;
    case 'kangaroo':
      url = require('./Creatures/kangaroo.webp');
      break;
    case 'ladybug':
      url = require('./Creatures/ladybug.webp');
      break;
    case 'leopard':
      url = require('./Creatures/leopard.webp');
      break;
    case 'lion':
      url = require('./Creatures/lion.webp');
      break;
    case 'lizard':
      url = require('./Creatures/lizard.webp');
      break;
    case 'llama':
      url = require('./Creatures/llama.webp');
      break;
    case 'lobster':
      url = require('./Creatures/lobster.webp');
      break;
    case 'mammoth':
      url = require('./Creatures/mammoth.webp');
      break;
    case 'mouse':
      url = require('./Creatures/mouse.webp');
      break;
    case 'octopus':
      url = require('./Creatures/octopus.webp');
      break;
    case 'orangutan':
      url = require('./Creatures/orangutan.webp');
      break;
    case 'otter':
      url = require('./Creatures/otter.webp');
      break;
    case 'owl':
      url = require('./Creatures/owl.webp');
      break;
    case 'ox':
      url = require('./Creatures/ox.webp');
      break;
    case 'panda':
      url = require('./Creatures/panda.webp');
      break;
    case 'parrot':
      url = require('./Creatures/parrot.webp');
      break;
    case 'peacock':
      url = require('./Creatures/peacock.webp');
      break;
    case 'penguin':
      url = require('./Creatures/penguin.webp');
      break;
    case 'pig':
      url = require('./Creatures/pig.webp');
      break;
    case 'polar bear':
      url = require('./Creatures/polar_bear.webp');
      break;
    case 'poodle':
      url = require('./Creatures/poodle.webp');
      break;
    case 'rabbit':
      url = require('./Creatures/rabbit.webp');
      break;
    case 'raccoon':
      url = require('./Creatures/raccoon.webp');
      break;
    case 'ram':
      url = require('./Creatures/ram.webp');
      break;
    case 'rat':
      url = require('./Creatures/rat.webp');
      break;
    case 'rhino':
      url = require('./Creatures/rhino.webp');
      break;
    case 'rooster':
      url = require('./Creatures/rooster.webp');
      break;
    case 'scorpion':
      url = require('./Creatures/scorpion.webp');
      break;
    case 'seal':
      url = require('./Creatures/seal.webp');
      break;
    case 'shark':
      url = require('./Creatures/shark.webp');
      break;
    case 'sheep':
      url = require('./Creatures/sheep.webp');
      break;
    case 'shrimp':
      url = require('./Creatures/shrimp.webp');
      break;
    case 'skunk':
      url = require('./Creatures/skunk.webp');
      break;
    case 'sloth':
      url = require('./Creatures/sloth.webp');
      break;
    case 'snail':
      url = require('./Creatures/snail.webp');
      break;
    case 'snake':
      url = require('./Creatures/snake.webp');
      break;
    case 'spider':
      url = require('./Creatures/spider.webp');
      break;
    case 'squid':
      url = require('./Creatures/squid.webp');
      break;
    case 'swan':
      url = require('./Creatures/swan.webp');
      break;
    case 'T-Rex':
      url = require('./Creatures/T-Rex.webp');
      break;
    case 'tiger':
      url = require('./Creatures/tiger.webp');
      break;
    case 'tropical fish':
      url = require('./Creatures/tropical_fish.webp');
      break;
    case 'turkey':
      url = require('./Creatures/turkey.webp');
      break;
    case 'turtle':
      url = require('./Creatures/turtle.webp');
      break;
    case 'two-hump camel':
      url = require('./Creatures/two-hump_camel.webp');
      break;
    case 'water buffalo':
      url = require('./Creatures/water_buffalo.webp');
      break;
    case 'whale':
      url = require('./Creatures/whale.webp');
      break;
    case 'wolf':
      url = require('./Creatures/wolf.webp');
      break;
    case 'worm':
      url = require('./Creatures/worm.webp');
      break;
    case 'zebra':
      url = require('./Creatures/zebra.webp');
      break;
    case 'nest':
      url = require('./Creatures/nest.webp');
      break;
    case 'paw prints':
      url = require('./Creatures/paw_prints.webp');
      break;
    case 'seashell':
      url = require('./Creatures/seashell.webp');
      break;
    /////////////////
    /////////////////
    /////////////////
    /////////////////

    // TODO .
    // diff nouns
    case 'artist palette':
      url = require('./Nouns/artist_palette.webp');
      break;
    case 'balloon':
      url = require('./Nouns/balloon.webp');
      break;
    case 'basket':
      url = require('./Nouns/basket.webp');
      break;
    case 'bathtub':
      url = require('./Nouns/bathtub.webp');
      break;
    case 'bookmark':
      url = require('./Nouns/bookmark.webp');
      break;
    case 'bubbles':
      url = require('./Nouns/bubbles.webp');
      break;
    case 'bus stop':
      url = require('./Nouns/bus_stop.webp');
      break;
    case 'calendar':
      url = require('./Nouns/calendar.webp');
      break;
    case 'camping':
      url = require('./Nouns/camping.webp');
      break;
    case 'candle':
      url = require('./Nouns/candle.webp');
      break;
    case 'clipboard':
      url = require('./Nouns/clipboard.webp');
      break;
    case 'cloud':
      url = require('./Nouns/cloud.webp');
      break;
    case 'coin':
      url = require('./Nouns/coin.webp');
      break;
    case 'comet':
      url = require('./Nouns/comet.webp');
      break;
    case 'crayon':
      url = require('./Nouns/crayon.webp');
      break;
    case 'desert':
      url = require('./Nouns/desert.webp');
      break;
    case 'droplet':
      url = require('./Nouns/droplet.webp');
      break;
    case 'Earht':
      url = require('./Nouns/Earht.webp');
      break;
    case 'envelope':
      url = require('./Nouns/envelope.webp');
      break;
    case 'fire':
      url = require('./Nouns/fire.webp');
      break;
    case 'fountain':
      url = require('./Nouns/fountain.webp');
      break;
    case 'helmet with white cross':
      url = require('./Nouns/helmet_with_white_cross.webp');
      break;
    case 'hole':
      url = require('./Nouns/hole.webp');
      break;
    case 'kite':
      url = require('./Nouns/kite.webp');
      break;
    case 'label tag':
      url = require('./Nouns/label_tag.webp');
      break;
    case 'ledger':
      url = require('./Nouns/ledger.webp');
      break;
    case 'medal':
      url = require('./Nouns/medal.webp');
      break;
    case 'memo':
      url = require('./Nouns/memo.webp');
      break;
    case 'military medal':
      url = require('./Nouns/military_medal.webp');
      break;
    case 'Moon':
      url = require('./Nouns/Moon.webp');
      break;
    case 'mountain':
      url = require('./Nouns/mountain.webp');
      break;
    case 'nesting dolls':
      url = require('./Nouns/nesting_dolls.webp');
      break;
    case 'paintbrush':
      url = require('./Nouns/paintbrush.webp');
      break;
    case 'performing arts':
      url = require('./Nouns/performing_arts.webp');
      break;
    case 'playground slide':
      url = require('./Nouns/playground_slide.webp');
      break;
    case 'present':
      url = require('./Nouns/present.webp');
      break;
    case 'pushpin':
      url = require('./Nouns/pushpin.webp');
      break;
    case 'rainbow':
      url = require('./Nouns/rainbow.webp');
      break;
    case 'receipt':
      url = require('./Nouns/receipt.webp');
      break;
    case 'rock':
      url = require('./Nouns/rock.webp');
      break;
    case 'shower':
      url = require('./Nouns/shower.webp');
      break;
    case 'sign':
      url = require('./Nouns/sign.webp');
      break;
    case 'snowflake':
      url = require('./Nouns/snowflake.webp');
      break;
    case 'snowman':
      url = require('./Nouns/snowman.webp');
      break;
    case 'soap':
      url = require('./Nouns/soap.webp');
      break;
    case 'sponge':
      url = require('./Nouns/sponge.webp');
      break;
    case 'Sun':
      url = require('./Nouns/Sun.webp');
      break;
    case 'teddy bear':
    case 'toy':
      url = require('./Nouns/teddy_bear.webp');
      break;
    case 'tent':
      url = require('./Nouns/tent.webp');
      break;
    case 'tornado':
      url = require('./Nouns/tornado.webp');
      break;
    case 'trophy':
      url = require('./Nouns/trophy.webp');
      break;
    case 'volcano':
      url = require('./Nouns/volcano.webp');
      break;
    case 'wastebasket':
      url = require('./Nouns/wastebasket.webp');
      break;
    case 'wave':
      url = require('./Nouns/wave.webp');
      break;
    case 'wood':
      url = require('./Nouns/wood.webp');
      break;
    case 'world map':
      url = require('./Nouns/world_map.webp');
      break;
    /////////////////
    /////////////////
    /////////////////
    /////////////////
    case 'delete':
      url = require('./delete.webp');
      break;
    default:
      console.log('default');
      return null;
  }
  return (
    <Image style={[style, styles.image]} source={url} resizeMode={resizeMode} />
  );
};

export default NewImage;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});
