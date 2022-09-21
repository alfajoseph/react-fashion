const getCopy = (userType: string): string => {
    if (userType.toLowerCase() === 'admin') {
        return 'Hello Admin User!'
    }
    return 'Welcome user!'
}