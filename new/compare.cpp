#include <bits/stdc++.h>
using namespace std;

// Function to compare two scheduling algorithm results
bool isBetter(vector<double> &result1, vector<double> &result2) {
    // Compare based on average waiting time
    if (result1[0] < result2[0]) {
        return true;
    } else if (result1[0] > result2[0]) {
        return false;
    }

    // If waiting times are equal, compare based on average turnaround time
    if (result1[1] < result2[1]) {
        return true;
    } else if (result1[1] > result2[1]) {
        return false;
    }

    // If turnaround times are equal, compare based on CPU utilization
    if (result1[3] > result2[3]) {
        return true;
    } else if (result1[3] < result2[3]) {
        return false;
    }

    // If all metrics are equal, return false (they are equivalent in performance)
    return false;
}

int main() {
    int NUM_ALGORITHMS = 4;

    // Example 2D matrix representing results of scheduling algorithms
    vector<vector<double>> results = {
        {10.5, 15.2, 5.0, 80.0},
        {9.8, 14.5, 4.5, 85.0},
        {9.0, 14.0, 4.0, 90.0},
        {11.0, 16.0, 5.5, 75.0}
        // Add more rows as needed
    };

    // Initialize the best index to the first algorithm (index 0)
    int bestIndex = 0;

    // Compare each algorithm's results to find the best performing one
    for (int i = 1; i < NUM_ALGORITHMS; i++) {
        if (isBetter(results[i], results[bestIndex])) {
            bestIndex = i;
        }
    }

    // Output the best algorithm's results
    cout << "Best algorithm is at index: " << bestIndex << endl;
    

    return 0;
}
