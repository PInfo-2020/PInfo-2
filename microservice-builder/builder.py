#!/usr/bin/env python3

import mytoolkit, pathlib, builder_methods, sys, pickle
from mytoolkit import insure_python_version, say_hello, get_folders, skip_lines
from pathlib import Path
from pprint import pprint


cwd = Path('.').resolve()
source = cwd.joinpath('__template__-service')
target = cwd.joinpath('target')
savefile = cwd.joinpath('tmp_save')
say_hello( 'Microservice Builder', cwd )
insure_python_version( '3.1.0' )
skip_lines(2)



# We need substitutions to work with
print("Preparing substitutions ..")
microservice_parameters = None

if savefile.is_file():
    with savefile.open('rb') as f:
        microservice_parameters = pickle.load( f )

    skip_lines(3)
    print("These parameters were stored : ")
    pprint(microservice_parameters)
    if input("Reuse them ? [y/n] ").lower() != 'y':
        microservice_parameters = None
        skip_lines(2)

if microservice_parameters == None:
    while True:
        try:
            microservice_parameters = builder_methods.get_microservice_parameters()
            break
        except Exception as e:
            print("{}\n --- An error occured. Try again ! ---\n\n\n".format(e))

    microservice_parameters['__template_class__']    = microservice_parameters['__template__'][0].upper() + microservice_parameters['__template__'][1:]
    microservice_parameters['__db_name__']           = microservice_parameters['__template_class__'].lower()
    microservice_parameters['__port_offset__']       = microservice_parameters['__port__'] - 8080
    microservice_parameters['__template_class_UC__'] = microservice_parameters['__template_class__'].upper()
    microservice_parameters['__template_instance__'] = microservice_parameters['__template__']

    skip_lines(3)
    print("Please ensure these paremeters are correct : ")
    pprint(microservice_parameters)
    if input("Is it ok ? [y/n] ").lower() != 'y':
        sys.exit()

    with savefile.open('wb') as f:
        pickle.dump( microservice_parameters, f )

print("OK !")


# Preparing target directory : basic state verification
skip_lines(3)
print("Preparing target directory ..")
assert source.is_dir()
if not target.is_dir():
    target.mkdir()
objects_in_target = [x for x in target.iterdir()]
if len(objects_in_target) != 0:
    print("Error : target directory is not empty. Please empty it and try again.")
    print(objects_in_target)
    sys.exit()
print("OK !")



# Performing the substitutions !
skip_lines(3)
print("Creating the microservice ..")
try:
    builder_methods.apply_substitution( source, target, microservice_parameters )
except Exception as e:
    print("{}\n --- An error occured. Try again ! ---\n\n\n".format(e))

print("OK !")

print("Please note that you still have to : ")
print("\t - copy docker-compose/*.yml files to your actual docker-compose/ directory")
print("\t - manually add the lines from docker-compose/clean.sh to the same file in your actual docker-compose/clean.sh")
print("\t - add the name of your service in the main pom.xml")
print("\t - copy .sh files to the root of PInfo-2 AND give them executable status with 'sudo chmod +x ./*.sh'")
print("\t - (optional because the Java microservice uses create-drop method, so this would only work when the database service is launched and NOT the Java microservice) create a .sql file in docker-compose/test-data, that creates the relation and optionally creates instances in it (don't forget to uncomment the line that loads this SQL file in docker-compose-* files)'")
