# A list to store animal sightings
sightings = []

# Function to add a new sightings 
def add_sighting(animal, location):
    sighting = {'animal': animal, 'location': location}
    sightings.append(sighting)
    print("Added new sighting:", sighting)

# Function to display all sightings
def show_sightings():
    for sighting in sightings:
        print(sighting)

# Testing our functions
add_sighting('Lion', 'Serengeti')
add_sighting('Tiger', 'Sundarbans')

# function to update a sighting
def update_sighting(index,new_animal ,new_location):
    if 0 <= index < len(sightings):
        sightings[index] = {'animal': new_animal, 'location': new_location}
        print('Updated sighting:', sightings[index])
    else:
        print('No sighting found at index', index)


# Function to delete a sighting
def delete_sighting(index):
    if 0 <= index < len(sightings):
        removed = sightings.pop(index)
        print('Deleted sighting:', removed)
    else:
        print('No sighting found at index', index)

# Testing update and delete
update_sighting(0, 'Elephant', 'Ngorongoro')           
delete_sighting(1)

# Display final list of sightings
show_sightings()