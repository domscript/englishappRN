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
      url = require('./be/be.png');
      break;
    case 'hebe':
      url = require('./be/hebe.png');
      break;
    case 'ibe':
      url = require('./be/ibe.png');
      break;
    case 'itbe':
      url = require('./be/itbe.png');
      break;
    case 'shebe':
      url = require('./be/shebe.png');
      break;
    case 'theybe':
      url = require('./be/theybe.png');
      break;
    case 'webe':
      url = require('./be/webe.png');
      break;
    case 'yoube':
      url = require('./be/yoube.png');
      break;
    case 'here':
      url = require('./be/here.png');
      break;
    case 'there':
      url = require('./be/there.png');
      break;
    /////////
    // Prepositions
    case 'at':
      url = require('./Prepositions/at.png');
      break;
    case 'in':
      url = require('./Prepositions/in.png');
      break;
    case 'on':
      url = require('./Prepositions/on.png');
      break;
    case 'out':
      url = require('./Prepositions/out.png');
      break;
    case 'to':
      url = require('./Prepositions/to.png');
      break;

    // Question Words
    case 'how':
      url = require('./QuestionWords/how.png');
      break;
    case 'what':
      url = require('./QuestionWords/what.png');
      break;
    case 'when':
      url = require('./QuestionWords/when.png');
      break;
    case 'where':
      url = require('./QuestionWords/where.png');
      break;
    case 'who':
      url = require('./QuestionWords/who.png');
      break;
    case 'why':
      url = require('./QuestionWords/why.png');
      break;
    //////////////
    //////////////
    //////////////
    // Drinks
    case 'beer':
      url = require('./Drinks/beer.png');
      break;
    case 'boba tea':
      url = require('./Drinks/boba_tea.png');
      break;
    case 'cocktail':
      url = require('./Drinks/cocktail.png');
      break;
    case 'drink ':
      url = require('./Drinks/drink.png');
      break;
    case 'juice box':
      url = require('./Drinks/juice_box.png');
      break;
    case 'maté':
      url = require('./Drinks/mate.png');
      break;
    case 'milk':
      url = require('./Drinks/milk.png');
      break;
    case 'tea':
      url = require('./Drinks/tea.png');
      break;
    case 'tropical drink':
      url = require('./Drinks/tropical_drink.png');
      break;
    case 'wine':
      url = require('./Drinks/wine.png');
      break;
    //////////////
    //////////////
    //////////////

    // Food
    case 'bacon':
      url = require('./Food/bacon.png');
      break;
    case 'beans':
      url = require('./Food/beans.png');
      break;
    case 'bone':
      url = require('./Food/bone.png');
      break;
    case 'burrito':
      url = require('./Food/burrito.png');
      break;
    case 'butter':
      url = require('./Food/butter.png');
      break;
    case 'candy':
      url = require('./Food/candy.png');
      break;
    case 'cheese':
      url = require('./Food/cheese.png');
      break;
    case 'chestnut':
      url = require('./Food/chestnut.png');
      break;
    case 'chocolate bar':
      url = require('./Food/chocolate_bar.png');
      break;
    case 'cooked rice':
      url = require('./Food/cooked_rice.png');
      break;
    case 'curry and rice':
      url = require('./Food/curry_and_rice.png');
      break;
    case 'custard':
      url = require('./Food/custard.png');
      break;
    case 'dango':
      url = require('./Food/dango.png');
      break;
    case 'dumpling':
      url = require('./Food/dumpling.png');
      break;
    case 'egg':
      url = require('./Food/egg.png');
      break;
    case 'falafel':
      url = require('./Food/falafel.png');
      break;
    case 'fondue':
      url = require('./Food/fondue.png');
      break;
    case 'fortune cookie':
      url = require('./Food/fortune_cookie.png');
      break;
    case 'french fries':
      url = require('./Food/french_fries.png');
      break;
    case 'fried shrimp':
      url = require('./Food/fried_shrimp.png');
      break;
    case 'green salad':
      url = require('./Food/green_salad.png');
      break;
    case 'hamburger':
    case 'hamburgers':
      url = require('./Food/hamburger.png');
      break;
    case 'honey':
      url = require('./Food/honey_pot.png');
      break;
    case 'hot dog':
      url = require('./Food/hot_dog.png');
      break;
    case 'ice cream':
      url = require('./Food/ice_cream.png');
      break;
    case 'ice':
      url = require('./Food/ice.png');
      break;
    case 'lollipop':
      url = require('./Food/lollipop.png');
      break;
    case 'oden':
      url = require('./Food/oden.png');
      break;
    case 'oyster':
      url = require('./Food/oyster.png');
      break;
    case 'peanuts':
      url = require('./Food/peanuts.png');
      break;
    case 'pita sandwich':
      url = require('./Food/pita_sandwich.png');
      break;
    case 'pizza':
      url = require('./Food/pizza.png');
      break;
    case 'popcorn':
      url = require('./Food/popcorn.png');
      break;
    case 'poultry leg':
      url = require('./Food/poultry_leg.png');
      break;
    case 'rice ball':
      url = require('./Food/rice_ball.png');
      break;
    case 'rice cracker':
      url = require('./Food/rice_cracker.png');
      break;
    case 'salt':
      url = require('./Food/salt.png');
      break;
    case 'sandwich':
      url = require('./Food/sandwich.png');
      break;
    case 'shaved ice':
      url = require('./Food/shaved_ice.png');
      break;
    case 'soft ice cream':
      url = require('./Food/soft_ice_cream.png');
      break;
    case 'spaghetti':
      url = require('./Food/spaghetti.png');
      break;
    case 'steak':
      url = require('./Food/steak.png');
      break;
    case 'sushi':
      url = require('./Food/sushi.png');
      break;
    case 'taco':
      url = require('./Food/taco.png');
      break;
    case 'tamale':
      url = require('./Food/tamale.png');
      break;
    //////////////
    //////////////
    //////////////

    //////////////
    //////////////
    //////////////

    // study subs
    case 'cooking':
      url = require('./cooking.png');
      break;

    // Instruments Mechanisms Tools
    case 'abacus':
      url = require('./InstrumentsMechanismsTools/abacus.png');
      break;
    case 'alarm clock':
      url = require('./InstrumentsMechanismsTools/alarm_clock.png');
      break;
    case 'anchor':
      url = require('./InstrumentsMechanismsTools/anchor.png');
      break;
    case 'axe':
      url = require('./InstrumentsMechanismsTools/axe.png');
      break;
    case 'boomerang':
      url = require('./InstrumentsMechanismsTools/boomerang.png');
      break;
    case 'broom':
      url = require('./InstrumentsMechanismsTools/broom.png');
      break;
    case 'bucket':
      url = require('./InstrumentsMechanismsTools/bucket.png');
      break;
    case 'compass':
      url = require('./InstrumentsMechanismsTools/compass.png');
      break;
    case 'construction sign':
      url = require('./InstrumentsMechanismsTools/construction_sign.png');
      break;
    case 'dagger':
      url = require('./InstrumentsMechanismsTools/dagger.png');
      break;
    case 'fire extinguisher':
      url = require('./InstrumentsMechanismsTools/fire_extinguisher.png');
      break;
    case 'flashlight':
      url = require('./InstrumentsMechanismsTools/flashlight.png');
      break;
    case 'gear':
      url = require('./InstrumentsMechanismsTools/gear.png');
      break;
    case 'hammer':
      url = require('./InstrumentsMechanismsTools/hammer.png');
      break;
    case 'hand saw':
      url = require('./InstrumentsMechanismsTools/hand_saw.png');
      break;
    case 'hook':
      url = require('./InstrumentsMechanismsTools/hook.png');
      break;
    case 'hourglass':
      url = require('./InstrumentsMechanismsTools/hourglass.png');
      break;
    case 'key':
      url = require('./InstrumentsMechanismsTools/key.png');
      break;
    case 'ladder':
      url = require('./InstrumentsMechanismsTools/ladder.png');
      break;
    case 'magic wand':
      url = require('./InstrumentsMechanismsTools/magic_wand.png');
      break;
    case 'magnifying glass':
      url = require('./InstrumentsMechanismsTools/magnifying_glass.png');
      break;
    case 'microphone':
      url = require('./InstrumentsMechanismsTools/microphone.png');
      break;
    case 'microscope':
      url = require('./InstrumentsMechanismsTools/microscope.png');
      break;
    case 'mirror':
      url = require('./InstrumentsMechanismsTools/mirror.png');
      break;
    case 'paperclip':
      url = require('./InstrumentsMechanismsTools/paperclip.png');
      break;
    case 'pick':
      url = require('./InstrumentsMechanismsTools/pick.png');
      break;
    case 'plunger':
      url = require('./InstrumentsMechanismsTools/plunger.png');
      break;
    case 'safety pin':
      url = require('./InstrumentsMechanismsTools/safety_pin.png');
      break;
    case 'satellite antenna':
      url = require('./InstrumentsMechanismsTools/satellite_antenna.png');
      break;
    case 'scales':
      url = require('./InstrumentsMechanismsTools/scales.png');
      break;
    case 'scissors':
      url = require('./InstrumentsMechanismsTools/scissors.png');
      break;
    case 'screwdriver':
      url = require('./InstrumentsMechanismsTools/screwdriver.png');
      break;
    case 'sewing needle':
      url = require('./InstrumentsMechanismsTools/sewing_needle.png');
      break;
    case 'shield':
      url = require('./InstrumentsMechanismsTools/shield.png');
      break;
    case 'stopwatch':
      url = require('./InstrumentsMechanismsTools/stopwatch.png');
      break;
    case 'straight ruler':
      url = require('./InstrumentsMechanismsTools/straight_ruler.png');
      break;
    case 'sword':
      url = require('./InstrumentsMechanismsTools/sword.png');
      break;
    case 'telescope':
      url = require('./InstrumentsMechanismsTools/telescope.png');
      break;
    case 'test tube':
      url = require('./InstrumentsMechanismsTools/test_tube.png');
      break;
    case 'thread':
      url = require('./InstrumentsMechanismsTools/thread.png');
      break;
    case 'timer clock':
      url = require('./InstrumentsMechanismsTools/timer_clock.png');
      break;
    case 'toolbox':
      url = require('./InstrumentsMechanismsTools/toolbox.png');
      break;
    case 'traffic light':
      url = require('./InstrumentsMechanismsTools/traffic_light.png');
      break;
    case 'triangular ruler':
      url = require('./InstrumentsMechanismsTools/triangular_ruler.png');
      break;
    case 'wrench':
      url = require('./InstrumentsMechanismsTools/wrench.png');
      break;
    case 'yarn':
      url = require('./InstrumentsMechanismsTools/yarn.png');
      break;
    //////////////
    //////////////
    //////////////

    // Medical
    case 'adhesive bandage':
      url = require('./Medical/adhesive_bandage.png');
      break;
    case 'DNA':
      url = require('./Medical/DNA.png');
      break;
    case 'microbe':
      url = require('./Medical/microbe.png');
      break;
    case 'pill':
      url = require('./Medical/pill.png');
      break;
    case 'stethoscope':
      url = require('./Medical/stethoscope.png');
      break;
    case 'syringe':
      url = require('./Medical/syringe.png');
      break;
    case 'thermometer':
      url = require('./Medical/thermometer.png');
      break;
    case 'X-ray':
      url = require('./Medical/X-ray.png');
      break;
    //////////////
    //////////////
    //////////////

    // Flora
    case 'bouquet':
      url = require('./Flora/bouquet.png');
      break;
    case 'cactus':
      url = require('./Flora/cactus.png');
      break;
    case 'Christmas tree':
      url = require('./Flora/Christmas_tree.png');
      break;
    case 'coral':
      url = require('./Flora/coral.png');
      break;
    case 'evergreen tree':
      url = require('./Flora/evergreen_tree.png');
      break;
    case 'flower':
      url = require('./Flora/flower.png');
      break;
    case 'herb':
      url = require('./Flora/herb.png');
      break;
    case 'hibiscus':
      url = require('./Flora/hibiscus.png');
      break;
    case 'lotus':
      url = require('./Flora/lotus.png');
      break;
    case 'mushroom':
      url = require('./Flora/mushroom.png');
      break;
    case 'palm tree':
      url = require('./Flora/palm_tree.png');
      break;
    case 'potted plant':
      url = require('./Flora/potted_plant.png');
      break;
    case 'rose':
      url = require('./Flora/rose.png');
      break;
    case 'seedling':
      url = require('./Flora/seedling.png');
      break;
    case 'sunflower':
      url = require('./Flora/sunflower.png');
      break;
    case 'tree':
      url = require('./Flora/tree.png');
      break;
    case 'tulip':
      url = require('./Flora/tulip.png');
      break;
    //////////////
    //////////////
    //////////////

    // Accessories
    case 'backpack':
      url = require('./Accessories/backpack.png');
      break;
    case 'boxing glove':
      url = require('./Accessories/boxing_glove.png');
      break;
    case 'briefcase':
      url = require('./Accessories/briefcase.png');
      break;
    case 'crown':
      url = require('./Accessories/crown.png');
      break;
    case 'diving mask':
      url = require('./Accessories/diving_mask.png');
      break;
    case 'glasses':
      url = require('./Accessories/glasses.png');
      break;
    case 'goggles':
      url = require('./Accessories/goggles.png');
      break;
    case 'helmet':
      url = require('./Accessories/helmet.png');
      break;
    case 'luggage':
      url = require('./Accessories/luggage.png');
      break;
    case 'military helmet':
      url = require('./Accessories/military_helmet.png');
      break;
    case 'pouch':
      url = require('./Accessories/pouch.png');
      break;
    case 'purse':
      url = require('./Accessories/purse.png');
      break;
    case 'razor':
      url = require('./Accessories/razor.png');
      break;
    case 'ribbon bow':
      url = require('./Accessories/ribbon_bow.png');
      break;
    case 'ring':
      url = require('./Accessories/ring.png');
      break;
    case 'sunglasses':
      url = require('./Accessories/sunglasses.png');
      break;
    case 'toothbrush':
      url = require('./Accessories/toothbrush.png');
      break;
    //////////////
    //////////////
    //////////////

    // Buildings
    case 'bank':
      url = require('./Buildings/bank.png');
      break;
    case 'castle':
      url = require('./Buildings/castle.png');
      break;
    case 'church':
      url = require('./Buildings/church.png');
      break;
    case 'circus':
      url = require('./Buildings/circus_tent.png');
      break;
    case 'convenience store':
      url = require('./Buildings/convenience_store.png');
      break;
    case 'department store':
      url = require('./Buildings/department_store.png');
      break;
    case 'factory':
      url = require('./Buildings/factory.png');
      break;
    case 'home':
      url = require('./Buildings/home.png');
      break;
    case 'hospital':
      url = require('./Buildings/hospital.png');
      break;
    case 'hotel':
      url = require('./Buildings/hotel.png');
      break;
    case 'house':
      url = require('./Buildings/house.png');
      break;
    case 'mosque':
      url = require('./Buildings/mosque.png');
      break;
    case 'museum':
      url = require('./Buildings/museum.png');
      break;
    case 'post office':
      url = require('./Buildings/post_office.png');
      break;
    case 'school':
      url = require('./Buildings/school.png');
      break;
    case 'stadium':
      url = require('./Buildings/stadium.png');
      break;
    case 'synagogue':
      url = require('./Buildings/synagogue.png');
      break;
    case 'theater':
      url = require('./Buildings/theater.png');
      break;
    //////////////
    //////////////
    //////////////
    // Flags
    case 'Argentina':
      url = require('./Flags/Argentina.png');
      break;
    case 'Australia':
      url = require('./Flags/Australia.png');
      break;
    case 'Canada':
      url = require('./Flags/Canada.png');
      break;
    case 'China':
    case 'Chinese':
      url = require('./Flags/China.png');
      break;
    case 'France':
    case 'French':
      url = require('./Flags/France.png');
      break;
    case 'Germany':
    case 'German':
      url = require('./Flags/Germany.png');
      break;
    case 'India':
      url = require('./Flags/India.png');
      break;
    case 'Japan':
    case 'Japanese':
      url = require('./Flags/Japan.png');
      break;
    case 'Panama':
      url = require('./Flags/Panama.png');
      break;
    case 'South Korea':
    case 'Korean':
      url = require('./Flags/South_Korea.png');
      break;
    case 'Spain':
    case 'Spanish':
      url = require('./Flags/Spain.png');
      break;
    case 'Thailand':
    case 'Thai':
      url = require('./Flags/Thailand.png');
      break;
    case 'the UK':
    case 'English':
      url = require('./Flags/the_United_Kingdom.png');
      break;
    case 'the USA':
      url = require('./Flags/the_United_States.png');
      break;
    //////////////
    //////////////
    //////////////

    // Electronics
    case 'headphones':
      url = require('./Electronics/headphones.png');
      break;
    case 'laptop':
      url = require('./Electronics/laptop.png');
      break;
    case 'printer':
      url = require('./Electronics/printer.png');
      break;
    case 'smart_phone':
    case 'phone':
      url = require('./Electronics/smart_phone.png');
      break;
    case 'video camera':
      url = require('./Electronics/video_camera.png');
      break;
    case 'watch':
      url = require('./Electronics/watch.png');
      break;
    //////////////
    //////////////
    //////////////

    // Music
    case 'accordion':
      url = require('./Music/accordion.png');
      break;
    case 'banjo':
      url = require('./Music/banjo.png');
      break;
    case 'drum':
      url = require('./Music/drum.png');
      break;
    case 'guitar':
      url = require('./Music/guitar.png');
      break;
    case 'saxophone':
      url = require('./Music/saxophone.png');
      break;
    case 'trumpet':
      url = require('./Music/trumpet.png');
      break;
    case 'violin':
      url = require('./Music/violin.png');
      break;
    //////////////
    //////////////
    //////////////

    // Super
    case 'id':
      url = require('./id.png');
      break;
    case 'credit card':
      url = require('./credit_card.webp');
      break;
    case 'ticket':
      url = require('./ticket.png');
      break;
    case 'toilet':
      url = require('./toilet.png');
      break;
    //////////////
    //////////////
    //////////////
    case 'seat':
      url = require('./seat.png');
      break;
    case 'couch':
      url = require('./couch.png');
      break;
    case 'bag':
      url = require('./bag.png');
      break;
    case 'bed':
      url = require('./bed.png');
      break;
    case 'book':
      url = require('./book.png');
      break;
    case 'text':
      url = require('./text.png');
      break;
    case 'newspaper':
      url = require('./newspaper.png');
      break;
    case 'box':
      url = require('./box.png');
      break;
    case 'chair':
    case 'chairs':
      url = require('./chair.png');
      break;
    case 'door':
      url = require('./door.png');
      break;
    case 'floor':
      url = require('./floor.png');
      break;
    case 'folder':
      url = require('./folder.png');
      break;
    case 'letter':
      url = require('./letter.png');
      break;
    case 'message':
      url = require('./message.png');
      break;
    case 'pen':
      url = require('./pen.png');
      break;
    case 'pencil':
      url = require('./pencil.png');
      break;
    case 'table':
      url = require('./table.png');
      break;
    case 'umbrella':
      url = require('./umbrella.png');
      break;
    case 'wall':
      url = require('./wall.png');
      break;
    case 'window':
      url = require('./window.png');
      break;
    //////////////
    //////////////
    //////////////

    // Green Food
    case 'apple':
    case 'apples':
      url = require('./Green_Food/apple.png');
      break;
    case 'avocado':
      url = require('./Green_Food/avocado.png');
      break;
    case 'banana':
    case 'bananas':
      url = require('./Green_Food/banana.png');
      break;
    case 'bell pepper':
      url = require('./Green_Food/bell_pepper.png');
      break;
    case 'blueberries':
      url = require('./Green_Food/blueberries.png');
      break;
    case 'broccoli':
      url = require('./Green_Food/broccoli.png');
      break;
    case 'carrot':
    case 'carrots':
      url = require('./Green_Food/carrot.png');
      break;
    case 'cherries':
      url = require('./Green_Food/cherries.png');
      break;
    case 'coconut':
      url = require('./Green_Food/coconut.png');
      break;
    case 'eggplant':
      url = require('./Green_Food/eggplant.png');
      break;
    case 'corn':
      url = require('./Green_Food/corn.png');
      break;
    case 'cucumber':
      url = require('./Green_Food/cucumber.png');
      break;
    case 'garlic':
      url = require('./Green_Food/garlic.png');
      break;
    case 'grapes':
      url = require('./Green_Food/grapes.png');
      break;
    case 'hot pepper':
      url = require('./Green_Food/hot_pepper.png');
      break;
    case 'kiwi':
      url = require('./Green_Food/kiwi.png');
      break;
    case 'lemon':
      url = require('./Green_Food/lemon.png');
      break;
    case 'mango':
      url = require('./Green_Food/mango.png');
      break;
    case 'melon':
      url = require('./Green_Food/melon.png');
      break;
    case 'olive':
      url = require('./Green_Food/olive.png');
      break;
    case 'onion':
    case 'onions':
      url = require('./Green_Food/onion.png');
      break;
    case 'peach':
      url = require('./Green_Food/peach.png');
      break;
    case 'pear':
    case 'pears':
      url = require('./Green_Food/pear.png');
      break;
    case 'pineapple':
    case 'pineapples':
      url = require('./Green_Food/pineapple.png');
      break;
    case 'potato':
    case 'potatoes':
      url = require('./Green_Food/potato.png');
      break;
    case 'strawberry':
    case 'strawberries':
      url = require('./Green_Food/strawberry.png');
      break;
    case 'sweet potato':
      url = require('./Green_Food/sweet_potato.png');
      break;
    case 'tangerine':
    case 'tangerines':
      url = require('./Green_Food/tangerine.png');
      break;
    case 'tomato':
    case 'tomatoes':
      url = require('./Green_Food/tomato.png');
      break;
    case 'watermelon':
    case 'watermelons':
      url = require('./Green_Food/watermelon.png');
      break;
    //////////////
    //////////////
    //////////////

    // Professions
    case 'accountant':
    case 'auditor':
      url = require('./Professions/accountant.png');
      break;
    case 'actor':
      url = require('./Professions/actor.png');
      break;
    case 'artist':
      url = require('./Professions/artist.png');
      break;
    case 'astronaut':
      url = require('./Professions/astronaut.png');
      break;
    case 'baker':
      url = require('./Professions/baker.png');
      break;
    case 'builder':
    case 'laborer':
      url = require('./Professions/builder.png');
      break;
    case 'cardiologist':
      url = require('./Professions/cardiologist.png');
      break;
    case 'cleaner':
      url = require('./Professions/cleaner.png');
      break;
    case 'cleaner':
      url = require('./Professions/cleaner.png');
      break;
    case 'construction electrician':
      url = require('./Professions/construction_electrician.png');
      break;
    case 'construction engineer':
      url = require('./Professions/construction_engineer.png');
      break;
    case 'firefighter inspector':
      url = require('./Professions/firefighter_inspector.png');
      break;
    case 'safety inspector':
      url = require('./Professions/safety_inspector.png');
      break;
    case 'cook':
    case 'chef':
      url = require('./Professions/cook.png');
      break;
    case 'dentist':
      url = require('./Professions/dentist.png');
      break;
    case 'designer':
      url = require('./Professions/designer.png');
      break;
    case 'detective':
      url = require('./Professions/detective.png');
      break;
    case 'doctor':
      url = require('./Professions/doctor.png');
      break;
    case 'driver':
      url = require('./Professions/driver.png');
      break;
    case 'engineer':
      url = require('./Professions/engineer.png');
      break;
    case 'farmer':
      url = require('./Professions/farmer.png');
      break;
    case 'firefighter':
      url = require('./Professions/firefighter.png');
      break;
    case 'historian':
      url = require('./Professions/historian.png');
      break;
    case 'guide':
      url = require('./Professions/guide.png');
      break;
    case 'interpreter':
      url = require('./Professions/interpreter.png');
      break;
    case 'judge':
      url = require('./Professions/judge.png');
      break;
    case 'lawyer':
    case 'attorney':
      url = require('./Professions/lawyer.png');
      break;
    case 'mechanic':
      url = require('./Professions/mechanic.png');
      break;
    case 'musician':
      url = require('./Professions/musician.png');
      break;
    case 'nurse':
      url = require('./Professions/nurse.png');
      break;
    case 'nutritionist':
      url = require('./Professions/nutritionist.png');
      break;
    case 'office clerk':
      url = require('./Professions/office_clerk.png');
      break;
    case 'orthopedist':
      url = require('./Professions/orthopedist.png');
      break;
    case 'pilot':
      url = require('./Professions/pilot.png');
      break;
    case 'police officer':
      url = require('./Professions/police_officer.png');
      break;
    case 'programmer':
      url = require('./Professions/programmer.png');
      break;
    case 'receptionist':
      url = require('./Professions/receptionist.png');
      break;
    case 'scientist':
    case 'researcher':
      url = require('./Professions/scientist.png');
      break;
    case 'singer':
      url = require('./Professions/singer.png');
      break;
    case 'social worker':
      url = require('./Professions/social_worker.png');
      break;
    case 'student':
      url = require('./Professions/student.png');
      break;
    case 'taxi driver':
      url = require('./Professions/taxi_driver.png');
      break;
    case 'teacher':
    case 'professor':
      url = require('./Professions/teacher.png');
      break;
    case 'technologist':
      url = require('./Professions/technologist.png');
      break;
    case 'truck driver':
      url = require('./Professions/truck_driver.png');
      break;
    case 'welder':
      url = require('./Professions/welder.png');
      break;
    case 'writer':
    case 'author':
      url = require('./Professions/writer.png');
      break;
    //////////////
    //////////////
    //////////////

    // Subject_Pronouns
    case 'he':
      url = require('./Pronouns/Subject_Pronouns/he.png');
      break;
    case 'i':
      url = require('./Pronouns/Subject_Pronouns/i.png');
      break;
    case 'it':
      url = require('./Pronouns/Subject_Pronouns/it.png');
      break;
    case 'she':
      url = require('./Pronouns/Subject_Pronouns/she.png');
      break;
    case 'they':
      url = require('./Pronouns/Subject_Pronouns/they.png');
      break;
    case 'we':
      url = require('./Pronouns/Subject_Pronouns/we.png');
      break;
    case 'you':
      url = require('./Pronouns/Subject_Pronouns/you.png');
      break;
    //////////////
    //////////////
    //////////////

    // Pastries
    case 'bagel':
      url = require('./Pastries/bagel.png');
      break;
    case 'baguette':
      url = require('./Pastries/baguette.png');
      break;
    case 'birthday cake':
      url = require('./Pastries/birthday_cake.png');
      break;
    case 'bread':
      url = require('./Pastries/bread.png');
      break;
    case 'cookie':
    case 'cookies':
      url = require('./Pastries/cookie.png');
      break;
    case 'croissant':
      url = require('./Pastries/croissant.png');
      break;
    case 'cupcake':
      url = require('./Pastries/cupcake.png');
      break;
    case 'doughnut':
      url = require('./Pastries/doughnut.png');
      break;
    case 'flat bread':
      url = require('./Pastries/flat_bread.png');
      break;
    case 'mooncake':
      url = require('./Pastries/mooncake.png');
      break;
    case 'pancakes':
      url = require('./Pastries/pancakes.png');
      break;
    case 'pie':
      url = require('./Pastries/pie.png');
      break;
    case 'pretzel':
      url = require('./Pastries/pretzel.png');
      break;
    case 'shortcake':
      url = require('./Pastries/shortcake.png');
      break;
    case 'waffle':
      url = require('./Pastries/waffle.png');
      break;
    //////////////
    //////////////
    //////////////

    // Clothes
    case 'ballet shoes':
      url = require('./Clothes/ballet_shoes.png');
      break;
    case 'bikini':
      url = require('./Clothes/bikini.png');
      break;
    case 'billed hat':
      url = require('./Clothes/billed_hat.png');
      break;
    case 'blouse':
      url = require('./Clothes/blouse.png');
      break;
    case 'briefs':
      url = require('./Clothes/briefs.png');
      break;
    case 'coat':
      url = require('./Clothes/coat.png');
      break;
    case 'dress':
      url = require('./Clothes/dress.png');
      break;
    case 'dress shoe':
      url = require('./Clothes/dress_shoe.png');
      break;
    case 'flat shoe':
      url = require('./Clothes/flat_shoe.png');
      break;
    case 'gloves':
      url = require('./Clothes/gloves.png');
      break;
    case 'graduation cap':
      url = require('./Clothes/graduation_cap.png');
      break;
    case 'hat with bow':
      url = require('./Clothes/hat_with_bow.png');
      break;
    case 'heeled boots':
      url = require('./Clothes/heeled_boots.png');
      break;
    case 'heeled sandal':
      url = require('./Clothes/heeled_sandal.png');
      break;
    case 'high-heeled shoe':
      url = require('./Clothes/high-heeled_shoe.png');
      break;
    case 'hiking boot':
      url = require('./Clothes/hiking_boot.png');
      break;
    case 'jeans':
      url = require('./Clothes/jeans.png');
      break;
    case 'kimono':
      url = require('./Clothes/kimono.png');
      break;
    case 'lab coat':
      url = require('./Clothes/lab_coat.png');
      break;
    case 'martial arts uniform':
      url = require('./Clothes/martial_arts_uniform.png');
      break;
    case 'one-piece swimsuit':
      url = require('./Clothes/one-piece_swimsuit.png');
      break;
    case 'polo shirt':
      url = require('./Clothes/polo_shirt.png');
      break;
    case 'running shirt':
      url = require('./Clothes/running_shirt.png');
      break;
    case 'safety vest':
      url = require('./Clothes/safety_vest.png');
      break;
    case 'sandal':
      url = require('./Clothes/sandal.png');
      break;
    case 'sari':
      url = require('./Clothes/sari.png');
      break;
    case 'scarf':
      url = require('./Clothes/scarf.png');
      break;
    case 'shorts':
      url = require('./Clothes/shorts.png');
      break;
    case 'socks':
      url = require('./Clothes/socks.png');
      break;
    case 'tennis shoe':
      url = require('./Clothes/tennis_shoe.png');
      break;
    case 'top hat':
      url = require('./Clothes/top_hat.png');
      break;
    //////////////
    //////////////
    //////////////

    // Utensils
    case 'baby bottle':
      url = require('./Utensils/baby_bottle.png');
      break;
    case 'bowl':
      url = require('./Utensils/bowl.png');
      break;
    case 'chopsticks':
      url = require('./Utensils/chopsticks.png');
      break;
    case 'fork':
      url = require('./Utensils/fork.png');
      break;
    case 'jar':
      url = require('./Utensils/jar.png');
      break;
    case 'knife':
      url = require('./Utensils/knife.png');
      break;
    case 'plate':
      url = require('./Utensils/plate.png');
      break;
    case 'spoon':
      url = require('./Utensils/spoon.png');
      break;
    case 'table knife':
      url = require('./Utensils/table_knife.png');
      break;
    case 'teapot':
      url = require('./Utensils/teapot.png');
      break;
    //////////////
    //////////////
    //////////////

    // Transport
    case 'airplane':
      url = require('./Transport/airplane.png');
      break;
    case 'ambulance':
      url = require('./Transport/ambulance.png');
      break;
    case 'bicycle':
      url = require('./Transport/bicycle.png');
      break;
    case 'bus':
      url = require('./Transport/bus.png');
      break;
    case 'car':
      url = require('./Transport/car.png');
      break;
    case 'delivery truck':
      url = require('./Transport/delivery_truck.png');
      break;
    case 'ferry':
      url = require('./Transport/ferry.png');
      break;
    case 'fire engine':
      url = require('./Transport/fire_engine.png');
      break;
    case 'helicopter':
      url = require('./Transport/helicopter.png');
      break;
    case 'ice skate':
      url = require('./Transport/ice_skate.png');
      break;
    case 'minibus':
      url = require('./Transport/minibus.png');
      break;
    case 'motor scooter':
      url = require('./Transport/motor_scooter.png');
      break;
    case 'motorboat':
      url = require('./Transport/motorboat.png');
      break;
    case 'motorcycle':
      url = require('./Transport/motorcycle.png');
      break;
    case 'passenger ship':
      url = require('./Transport/passenger_ship.png');
      break;
    case 'pickup truck':
      url = require('./Transport/pickup_truck.png');
      break;
    case 'police car':
      url = require('./Transport/police_car.png');
      break;
    case 'race car':
      url = require('./Transport/race_car.png');
      break;
    case 'rocket':
      url = require('./Transport/rocket.png');
      break;
    case 'roller skate':
      url = require('./Transport/roller_skate.png');
      break;
    case 'sailboat':
      url = require('./Transport/sailboat.png');
      break;
    case 'scooter':
      url = require('./Transport/scooter.png');
      break;
    case 'semi-truck':
      url = require('./Transport/semi-truck.png');
      break;
    case 'ship':
      url = require('./Transport/ship.png');
      break;
    case 'skateboard':
      url = require('./Transport/skateboard.png');
      break;
    case 'sled':
      url = require('./Transport/sled.png');
      break;
    case 'small airplane':
      url = require('./Transport/small_airplane.png');
      break;
    case 'speedboat':
      url = require('./Transport/speedboat.png');
      break;
    case 'SUV':
      url = require('./Transport/suv.png');
      break;
    case 'taxi':
      url = require('./Transport/taxi.png');
      break;
    case 'tractor':
      url = require('./Transport/tractor.png');
      break;
    case 'trolleybus':
      url = require('./Transport/trolleybus.png');
      break;
    case 'UFO':
      url = require('./Transport/UFO.png');
      break;
    //////////////
    //////////////
    //////////////

    // Object_Pronouns
    case 'me':
      url = require('./Pronouns/Object_Pronouns/me.png');
      break;
    case 'you ':
      url = require('./Pronouns/Object_Pronouns/you.png');
      break;
    case 'him':
      url = require('./Pronouns/Object_Pronouns/him.png');
      break;
    case 'her':
      url = require('./Pronouns/Object_Pronouns/her.png');
      break;
    case 'it ':
      url = require('./Pronouns/Object_Pronouns/it.png');
      break;
    case 'us':
      url = require('./Pronouns/Object_Pronouns/us.png');
      break;
    case 'them':
      url = require('./Pronouns/Object_Pronouns/them.png');
      break;

    // Possessive_Adjectives
    case 'her ':
      url = require('./Pronouns/Possessive_Adjectives/her.png');
      break;
    case 'his':
      url = require('./Pronouns/Possessive_Adjectives/his.png');
      break;
    case 'its':
      url = require('./Pronouns/Possessive_Adjectives/its.png');
      break;
    case 'my':
      url = require('./Pronouns/Possessive_Adjectives/my.png');
      break;
    case 'our':
      url = require('./Pronouns/Possessive_Adjectives/our.png');
      break;
    case 'their':
      url = require('./Pronouns/Possessive_Adjectives/their.png');
      break;
    case 'your':
      url = require('./Pronouns/Possessive_Adjectives/your.png');
      break;

    //////////////
    //////////////
    //////////////

    // Family
    case 'children':
      url = require('./Family/children.png');
      break;
    case 'daughter':
      url = require('./Family/daughter.png');
      break;
    case 'father':
      url = require('./Family/father.png');
      break;
    case 'grandfather':
      url = require('./Family/grandfather.png');
      break;
    case 'grandmother':
      url = require('./Family/grandmother.png');
      break;
    case 'husband':
      url = require('./Family/husband.png');
      break;
    case 'mother':
      url = require('./Family/mother.png');
      break;
    case 'parents':
      url = require('./Family/parents.png');
      break;
    case 'sister':
      url = require('./Family/sister.png');
      break;
    case 'brother':
      url = require('./Family/brother.png');
      break;
    case 'son':
      url = require('./Family/son.png');
      break;
    case 'wife':
      url = require('./Family/wife.png');
      break;

    //////////////
    //////////////
    //////////////

    // Creatures
    case 'ant':
      url = require('./Creatures/ant.png');
      break;
    case 'badger':
      url = require('./Creatures/badger.png');
      break;
    case 'bat':
      url = require('./Creatures/bat.png');
      break;
    case 'bear':
      url = require('./Creatures/bear.png');
      break;
    case 'beaver':
      url = require('./Creatures/beaver.png');
      break;
    case 'bee':
      url = require('./Creatures/bee.png');
      break;
    case 'beetle':
      url = require('./Creatures/beetle.png');
      break;
    case 'bison':
      url = require('./Creatures/bison.png');
      break;
    case 'blowfish':
      url = require('./Creatures/blowfish.png');
      break;
    case 'bug':
      url = require('./Creatures/bug.png');
      break;
    case 'butterfly':
      url = require('./Creatures/butterfly.png');
      break;
    case 'camel':
      url = require('./Creatures/camel.png');
      break;
    case 'cat':
      url = require('./Creatures/cat.png');
      break;
    case 'chick':
      url = require('./Creatures/chick.png');
      break;
    case 'chipmunk':
      url = require('./Creatures/chipmunk.png');
      break;
    case 'cockroach':
      url = require('./Creatures/cockroach.png');
      break;
    case 'cow':
      url = require('./Creatures/cow.png');
      break;
    case 'crab':
      url = require('./Creatures/crab.png');
      break;
    case 'cricket':
      url = require('./Creatures/cricket.png');
      break;
    case 'crocodile':
      url = require('./Creatures/crocodile.png');
      break;
    case 'deer':
      url = require('./Creatures/deer.png');
      break;
    case 'dinosaur':
      url = require('./Creatures/dinosaur.png');
      break;
    case 'dodo bird':
      url = require('./Creatures/dodo_bird.png');
      break;
    case 'dog':
      url = require('./Creatures/dog.png');
      break;
    case 'dolphin':
      url = require('./Creatures/dolphin.png');
      break;
    case 'dove':
      url = require('./Creatures/dove.png');
      break;
    case 'dragon':
      url = require('./Creatures/dragon.png');
      break;
    case 'duck':
      url = require('./Creatures/duck.png');
      break;
    case 'eagle':
      url = require('./Creatures/eagle.png');
      break;
    case 'elephant':
      url = require('./Creatures/elephant.png');
      break;
    case 'fish':
      url = require('./Creatures/fish.png');
      break;
    case 'flamingo':
      url = require('./Creatures/flamingo.png');
      break;
    case 'fly':
      url = require('./Creatures/fly.png');
      break;
    case 'fox':
      url = require('./Creatures/fox.png');
      break;
    case 'giraffe':
      url = require('./Creatures/giraffe.png');
      break;
    case 'goat':
      url = require('./Creatures/goat.png');
      break;
    case 'gorilla':
      url = require('./Creatures/gorilla.png');
      break;
    case 'hedgehog':
      url = require('./Creatures/hedgehog.png');
      break;
    case 'hippo':
      url = require('./Creatures/hippo.png');
      break;
    case 'horse':
      url = require('./Creatures/horse.png');
      break;
    case 'kangaroo':
      url = require('./Creatures/kangaroo.png');
      break;
    case 'ladybug':
      url = require('./Creatures/ladybug.png');
      break;
    case 'leopard':
      url = require('./Creatures/leopard.png');
      break;
    case 'lion':
      url = require('./Creatures/lion.png');
      break;
    case 'lizard':
      url = require('./Creatures/lizard.png');
      break;
    case 'llama':
      url = require('./Creatures/llama.png');
      break;
    case 'lobster':
      url = require('./Creatures/lobster.png');
      break;
    case 'mammoth':
      url = require('./Creatures/mammoth.png');
      break;
    case 'mouse':
      url = require('./Creatures/mouse.png');
      break;
    case 'octopus':
      url = require('./Creatures/octopus.png');
      break;
    case 'orangutan':
      url = require('./Creatures/orangutan.png');
      break;
    case 'otter':
      url = require('./Creatures/otter.png');
      break;
    case 'owl':
      url = require('./Creatures/owl.png');
      break;
    case 'ox':
      url = require('./Creatures/ox.png');
      break;
    case 'panda':
      url = require('./Creatures/panda.png');
      break;
    case 'parrot':
      url = require('./Creatures/parrot.png');
      break;
    case 'peacock':
      url = require('./Creatures/peacock.png');
      break;
    case 'penguin':
      url = require('./Creatures/penguin.png');
      break;
    case 'pig':
      url = require('./Creatures/pig.png');
      break;
    case 'polar bear':
      url = require('./Creatures/polar_bear.png');
      break;
    case 'poodle':
      url = require('./Creatures/poodle.png');
      break;
    case 'rabbit':
      url = require('./Creatures/rabbit.png');
      break;
    case 'raccoon':
      url = require('./Creatures/raccoon.png');
      break;
    case 'ram':
      url = require('./Creatures/ram.png');
      break;
    case 'rat':
      url = require('./Creatures/rat.png');
      break;
    case 'rhino':
      url = require('./Creatures/rhino.png');
      break;
    case 'rooster':
      url = require('./Creatures/rooster.png');
      break;
    case 'scorpion':
      url = require('./Creatures/scorpion.png');
      break;
    case 'seal':
      url = require('./Creatures/seal.png');
      break;
    case 'shark':
      url = require('./Creatures/shark.png');
      break;
    case 'sheep':
      url = require('./Creatures/sheep.png');
      break;
    case 'shrimp':
      url = require('./Creatures/shrimp.png');
      break;
    case 'skunk':
      url = require('./Creatures/skunk.png');
      break;
    case 'sloth':
      url = require('./Creatures/sloth.png');
      break;
    case 'snail':
      url = require('./Creatures/snail.png');
      break;
    case 'snake':
      url = require('./Creatures/snake.png');
      break;
    case 'spider':
      url = require('./Creatures/spider.png');
      break;
    case 'squid':
      url = require('./Creatures/squid.png');
      break;
    case 'swan':
      url = require('./Creatures/swan.png');
      break;
    case 'T-Rex':
      url = require('./Creatures/T-Rex.png');
      break;
    case 'tiger':
      url = require('./Creatures/tiger.png');
      break;
    case 'tropical fish':
      url = require('./Creatures/tropical_fish.png');
      break;
    case 'turkey':
      url = require('./Creatures/turkey.png');
      break;
    case 'turtle':
      url = require('./Creatures/turtle.png');
      break;
    case 'two-hump camel':
      url = require('./Creatures/two-hump_camel.png');
      break;
    case 'water buffalo':
      url = require('./Creatures/water_buffalo.png');
      break;
    case 'whale':
      url = require('./Creatures/whale.png');
      break;
    case 'wolf':
      url = require('./Creatures/wolf.png');
      break;
    case 'worm':
      url = require('./Creatures/worm.png');
      break;
    case 'zebra':
      url = require('./Creatures/zebra.png');
      break;
    case 'nest':
      url = require('./Creatures/nest.png');
      break;
    case 'paw prints':
      url = require('./Creatures/paw_prints.png');
      break;
    case 'seashell':
      url = require('./Creatures/seashell.png');
      break;
    /////////////////
    /////////////////
    /////////////////
    /////////////////

    // TODO .
    // diff nouns
    case 'artist palette':
      url = require('./Nouns/artist_palette.png');
      break;
    case 'balloon':
      url = require('./Nouns/balloon.png');
      break;
    case 'basket':
      url = require('./Nouns/basket.png');
      break;
    case 'bathtub':
      url = require('./Nouns/bathtub.png');
      break;
    case 'bookmark':
      url = require('./Nouns/bookmark.png');
      break;
    case 'bubbles':
      url = require('./Nouns/bubbles.png');
      break;
    case 'bus stop':
      url = require('./Nouns/bus_stop.png');
      break;
    case 'calendar':
      url = require('./Nouns/calendar.png');
      break;
    case 'camping':
      url = require('./Nouns/camping.png');
      break;
    case 'candle':
      url = require('./Nouns/candle.png');
      break;
    case 'clipboard':
      url = require('./Nouns/clipboard.png');
      break;
    case 'cloud':
      url = require('./Nouns/cloud.png');
      break;
    case 'coin':
      url = require('./Nouns/coin.png');
      break;
    case 'comet':
      url = require('./Nouns/comet.png');
      break;
    case 'crayon':
      url = require('./Nouns/crayon.png');
      break;
    case 'desert':
      url = require('./Nouns/desert.png');
      break;
    case 'droplet':
      url = require('./Nouns/droplet.png');
      break;
    case 'Earht':
      url = require('./Nouns/Earht.png');
      break;
    case 'envelope':
      url = require('./Nouns/envelope.png');
      break;
    case 'fire':
      url = require('./Nouns/fire.png');
      break;
    case 'fountain':
      url = require('./Nouns/fountain.png');
      break;
    case 'helmet with white cross':
      url = require('./Nouns/helmet_with_white_cross.png');
      break;
    case 'hole':
      url = require('./Nouns/hole.png');
      break;
    case 'kite':
      url = require('./Nouns/kite.png');
      break;
    case 'label tag':
      url = require('./Nouns/label_tag.png');
      break;
    case 'ledger':
      url = require('./Nouns/ledger.png');
      break;
    case 'medal':
      url = require('./Nouns/medal.png');
      break;
    case 'memo':
      url = require('./Nouns/memo.png');
      break;
    case 'military medal':
      url = require('./Nouns/military_medal.png');
      break;
    case 'Moon':
      url = require('./Nouns/Moon.png');
      break;
    case 'mountain':
      url = require('./Nouns/mountain.png');
      break;
    case 'nesting dolls':
      url = require('./Nouns/nesting_dolls.png');
      break;
    case 'paintbrush':
      url = require('./Nouns/paintbrush.png');
      break;
    case 'performing arts':
      url = require('./Nouns/performing_arts.png');
      break;
    case 'playground slide':
      url = require('./Nouns/playground_slide.png');
      break;
    case 'present':
      url = require('./Nouns/present.png');
      break;
    case 'pushpin':
      url = require('./Nouns/pushpin.png');
      break;
    case 'rainbow':
      url = require('./Nouns/rainbow.png');
      break;
    case 'receipt':
      url = require('./Nouns/receipt.png');
      break;
    case 'rock':
      url = require('./Nouns/rock.png');
      break;
    case 'shower':
      url = require('./Nouns/shower.png');
      break;
    case 'sign':
      url = require('./Nouns/sign.png');
      break;
    case 'snowflake':
      url = require('./Nouns/snowflake.png');
      break;
    case 'snowman':
      url = require('./Nouns/snowman.png');
      break;
    case 'soap':
      url = require('./Nouns/soap.png');
      break;
    case 'sponge':
      url = require('./Nouns/sponge.png');
      break;
    case 'Sun':
      url = require('./Nouns/Sun.png');
      break;
    case 'teddy bear':
    case 'toy':
      url = require('./Nouns/teddy_bear.png');
      break;
    case 'tent':
      url = require('./Nouns/tent.png');
      break;
    case 'tornado':
      url = require('./Nouns/tornado.png');
      break;
    case 'trophy':
      url = require('./Nouns/trophy.png');
      break;
    case 'volcano':
      url = require('./Nouns/volcano.png');
      break;
    case 'wastebasket':
      url = require('./Nouns/wastebasket.png');
      break;
    case 'wave':
      url = require('./Nouns/wave.png');
      break;
    case 'wood':
      url = require('./Nouns/wood.png');
      break;
    case 'world map':
      url = require('./Nouns/world_map.png');
      break;
    /////////////////
    /////////////////
    /////////////////
    /////////////////
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
