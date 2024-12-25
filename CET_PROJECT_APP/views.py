from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib import messages
from django.contrib.auth.forms import AuthenticationForm
from .forms import UserRegisterForm, UserLoginForm
from django.views import View
from .models import MCAData

# View for index.html (Search by College)
def index(request):
    return render(request, 'index.html')

def search_options(request):
    return render(request, 'search_options.html')

# View for searchCutOff.html (Search by College Cutoff)
def search_cutoff(request):
    return render(request, 'searchCutOff.html')

# User registration view
def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            messages.success(request, f'Account created for {username}!')
            return redirect('login')
    else:
        form = UserRegisterForm()
    return render(request, 'register.html', {'form': form})

# User login view
def login_view(request):
    if request.method == 'POST':
        form = UserLoginForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, f'Welcome, {username}!')
                return redirect('base')  # Redirect to the homepage or dashboard
            else:
                messages.error(request, 'Invalid username or password.')
        else:
            messages.error(request, 'Invalid form submission.')
    else:
        form = UserLoginForm()
    return render(request, 'login.html', {'form': form})

# User logout view
def logout_view(request):
    logout(request)
    messages.success(request, 'You have been logged out.')
    return redirect('login')

class SearchView(View):
    def get(self, request):
        return render(request, 'index.html') 
    
    
def base_view(request):
    return render(request, 'base.html')  
        
def result(request):
    searchresults=None
      
    searchedCollege = request.GET.get("college")
    searchedCategory = request.GET.get("category")
    searchedCandidate = request.GET.get("candidatetype") 
    searchedYear = request.GET.get("year")
    searchedRound = request.GET.get("round")
    
    print(f"Selected College: {searchedCollege}")
    print(f"Selected Category: {searchedCategory}")
    print(f"Selected Candidate: {searchedCandidate}")
    print(f"Selected Year: {searchedYear}")
    print(f"Selected Round: {searchedRound}")
    
    
    searchresults=MCAData.objects.filter(College=searchedCollege, Category=searchedCategory, Candidate=searchedCandidate, Year=searchedYear, Round=searchedRound).values('Status','University','Code','Rank', 'Percentile')
    print(f"Query results: {searchresults}")
    return render (request, 'result.html', {"searchresults":searchresults})

def cutoff_result(request):
    top_colleges = []
    entered_percentile = request.GET.get('percentile')  # Using the name from the form

    if entered_percentile:
        try:
            # Convert the entered_percentile to float for comparison
            entered_percentile = float(entered_percentile)

            # Fetch top 10 unique colleges with Percentile < entered_percentile
            colleges = MCAData.objects.filter(Percentile__lt=entered_percentile).order_by('-Percentile')

            unique_colleges = {}
            for college in colleges:
                if college.College not in unique_colleges:
                    unique_colleges[college.College] = {'percentile': college.Percentile, 'code': college.Code}
                if len(unique_colleges) == 30:  
                    break

            # Convert to a list of tuples for rendering
            top_colleges = [(college, data['percentile'], data['code']) for college, data in unique_colleges.items()]

        except ValueError:
            print("Invalid percentile entered.") 

    return render(request, 'cutOffResult.html', {'top_colleges': top_colleges})

def filter3(request):
    return render(request, 'filter3.html')

def filter3Result(request):
    percentile = request.GET.get('percentile')
    rank = request.GET.get('rank')

    # Filter by case-insensitive university name and rank, and order by percentile in descending order
    results = MCAData.objects.filter(Rank__lte=rank, Percentile__lte=percentile) \
                             .order_by('-Percentile')[:10]

    return render(request, 'filter3Result.html', {'results': results})

def filter4_view(request):
    universities = MCAData.objects.values_list('University', flat=True).distinct()
    years = MCAData.objects.values_list('Year', flat=True).distinct()
    caprounds = MCAData.objects.values_list('Round', flat=True).distinct()
    return render(request, 'filter4.html', {
        'universities': universities,
        'years': years,
        'caprounds': caprounds,
    })
    
def filter4_result_view(request):
    top_colleges = []
    university = request.GET.get('university')
    year = request.GET.get('year')
    capround = request.GET.get('capround')

    if university and year and capround:
        colleges = MCAData.objects.filter(University__iexact=university, Year=year, Round=capround, Candidate="Home University", Category="OPEN").order_by('-Percentile')
        top_colleges = [(college.College, college.Code, college.Percentile) for college in colleges]

    return render(request, 'filter4Result.html', {'top_colleges': top_colleges})