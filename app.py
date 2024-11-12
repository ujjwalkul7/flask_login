from flask import Flask, render_template, request, redirect, url_for
import csv

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/designs')
def designs():
    return render_template('designs.html')

@app.route('/villas_floor_plans')
def villas_floor_plans():
    return render_template('villas_floor_plans.html')

@app.route('/flats_floor_plans')
def flats_floor_plans():
    return render_template('flats_floor_plans.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/team')
def team():
    return render_template('team.html')

@app.route('/living_room')
def living_room():
    return render_template('living_room.html')

@app.route('/kitchen')
def kitchen():
    return render_template('kitchen.html')

@app.route('/master_bedroom')
def master_bedroom():
    return render_template('master_bedroom.html')

@app.route('/dining_room')
def dining_room():
    return render_template('dining_room.html')

@app.route('/kids_bedroom')
def kids_bedroom():
    return render_template('kids_bedroom.html')

@app.route('/wardrobe')
def wardrobe():
    return render_template('wardrobe.html')

@app.route('/submit_project_form', methods=['POST'])
def submit_project_form():
    # Get form data
    name = request.form.get('full_name')
    email = request.form.get('email')
    phone_number = request.form.get('phone')
    project_type = request.form.get('project_type')
    details = request.form.get('project_details')

    # Define the CSV file path
    csv_file = 'user_data.csv'

    # Write the form data to a CSV file
    with open(csv_file, mode='a', newline='', encoding='utf-8') as file:
        writer = csv.writer(file)
        # Write headers only if the file is empty
        if file.tell() == 0:
            writer.writerow(['Name', 'Email', 'Phone Number', 'Project Type', 'Project Details'])
        # Write the form data as a new row
        writer.writerow([name, email, phone_number, project_type, details])

    return redirect(url_for('home'))

if __name__ == '__main__':
    app.run(debug=True)
