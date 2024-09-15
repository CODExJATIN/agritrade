import React, { useState } from 'react';
import { Button, Card, CardContent, CardHeader, CardMedia, CardActions, Tabs, Tab, Typography, TextField, Box } from '@mui/material';
import { Cloud, Grass, Agriculture, CalendarMonth, ChevronRight, WbSunny, Spa, Opacity, LocalFlorist, AttachMoney } from '@mui/icons-material';

export default function NewsPage() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <div style={{ minWidth:'100%',minHeight: '100vh', backgroundColor: '#F0E6D2', color: '#2C5F2D' }}>
      <div style={{ padding: '16px', margin: '0 auto', maxWidth: '1200px' }}>
        {/* Header */}
        <header style={{ marginBottom: '32px', textAlign: 'center' }}>
          <Box sx={{ position: 'relative', height: '160px', marginBottom: '16px' }}>
            <CardMedia
              component="img"
              image="https://agrierp.com/blog/wp-content/uploads/2024/01/why-is-agriculture-important-1536x878.webp"
              alt="Agriculture landscape"
              sx={{ borderRadius: '8px', height: '160px', width: '100%', objectFit: 'cover' }}
            />
            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              background: 'linear-gradient(to top, #2C5F2D, transparent)',
              opacity: 0.7,
              borderRadius: '8px'
            }} />
            <Typography variant="h4" component="h1" sx={{
              position: 'absolute',
              bottom: '16px',
              left: 0,
              right: 0,
              color: 'white',
              fontWeight: 'bold',
              textAlign: 'center'
            }}>
              Agriculture News & Expert Insights
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ color: '#4A7023' }}>
            Stay informed about Indian agriculture, policies, and expert advice
          </Typography>
        </header>

        {/* Main Content */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: '16px' }}>
          {/* Main Tabs */}
          <main>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor="primary"
              textColor="inherit"
              sx={{ marginBottom: '16px', backgroundColor: '#97BC62', color: 'white' }}
            >
              <Tab value={0} label="Latest News" sx={{ '&.Mui-selected': { backgroundColor: '#2C5F2D' } }} />
              <Tab value={1} label="Contract Farming Laws" sx={{ '&.Mui-selected': { backgroundColor: '#2C5F2D' } }} />
              <Tab value={2} label="Government Schemes" sx={{ '&.Mui-selected': { backgroundColor: '#2C5F2D' } }} />
            </Tabs>

            {/* Tab Panels */}
            {tabValue === 0 && (
              <Box sx={{ marginBottom: '32px' }}>
                {/* Latest News */}
                <Card sx={{ backgroundColor: 'white', borderColor: '#97BC62', marginBottom: '16px' }}>
                  <CardHeader
                    avatar={<Grass sx={{ color: '#2C5F2D' }} />}
                    title="Record Wheat Production Expected This Year"
                    subheader="Agriculture Ministry reports positive outlook"
                  />
                  <CardContent>
                    <Typography paragraph>
                      The Ministry of Agriculture has announced that wheat production is expected to reach record levels this year, thanks to favorable weather conditions and improved farming techniques...
                    </Typography>
                    <Button endIcon={<ChevronRight />} color="inherit" sx={{ padding: 0, textTransform: 'none' }}>
                      Read more
                    </Button>
                  </CardContent>
                </Card>

                <Card sx={{ backgroundColor: 'white', borderColor: '#97BC62' }}>
                  <CardHeader
                    avatar={<Spa sx={{ color: '#2C5F2D' }} />}
                    title="New Organic Farming Initiative Launched in Punjab"
                    subheader="State government aims to promote sustainable agriculture"
                  />
                  <CardContent>
                    <Typography paragraph>
                      The Punjab government has launched a new initiative to promote organic farming in the state. The program aims to reduce chemical fertilizer usage and improve soil health...
                    </Typography>
                    <Button endIcon={<ChevronRight />} color="inherit" sx={{ padding: 0, textTransform: 'none' }}>
                      Read more
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            )}

            {tabValue === 1 && (
              <Box sx={{ marginBottom: '32px' }}>
                {/* Contract Farming Laws */}
                <Card sx={{ backgroundColor: 'white', borderColor: '#97BC62', marginBottom: '16px' }}>
                  <CardHeader
                    avatar={<Agriculture sx={{ color: '#2C5F2D' }} />}
                    title="New Contract Farming Laws Passed"
                    subheader="Government ensures more transparency for farmers"
                  />
                  <CardContent>
                    <Typography paragraph>
                      The government has recently passed new laws that regulate contract farming. These laws aim to protect farmers' interests by ensuring fair terms, better pricing, and more transparency in agreements with contractors...
                    </Typography>
                    <Button endIcon={<ChevronRight />} color="inherit" sx={{ padding: 0, textTransform: 'none' }}>
                      Learn more
                    </Button>
                  </CardContent>
                </Card>

                <Card sx={{ backgroundColor: 'white', borderColor: '#97BC62' }}>
                  <CardHeader
                    title="Understanding Your Rights as a Farmer"
                    subheader="Know the legal framework for contract farming"
                  />
                  <CardContent>
                    <Typography paragraph>
                      Contract farming has become an essential part of modern agriculture, but it's important for farmers to know their rights. This article provides a detailed explanation of the legal aspects of contract farming agreements...
                    </Typography>
                    <Button endIcon={<ChevronRight />} color="inherit" sx={{ padding: 0, textTransform: 'none' }}>
                      Learn more
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            )}

            {tabValue === 2 && (
              <Box sx={{ marginBottom: '32px' }}>
                {/* Government Schemes */}
                <Card sx={{ backgroundColor: 'white', borderColor: '#97BC62', marginBottom: '16px' }}>
                  <CardHeader
                    avatar={<AttachMoney sx={{ color: '#2C5F2D' }} />}
                    title="PM Kisan Samman Nidhi Yojana"
                    subheader="Government scheme for direct income support to farmers"
                  />
                  <CardContent>
                    <Typography paragraph>
                      The PM-Kisan scheme is a Central Sector scheme that offers income support to all landholding farmer families in the country. Under this scheme, an amount of ₹6,000 per year is provided to the farmers, payable in three equal installments...
                    </Typography>
                    <Button endIcon={<ChevronRight />} color="inherit" sx={{ padding: 0, textTransform: 'none' }}>
                      Learn more
                    </Button>
                  </CardContent>
                </Card>

                <Card sx={{ backgroundColor: 'white', borderColor: '#97BC62' }}>
                  <CardHeader
                    avatar={<Opacity sx={{ color: '#2C5F2D' }} />}
                    title="National Mission for Sustainable Agriculture"
                    subheader="Promoting sustainable agricultural practices"
                  />
                  <CardContent>
                    <Typography paragraph>
                      The National Mission for Sustainable Agriculture (NMSA) is one of the government's flagship schemes, aimed at promoting sustainable farming practices. It focuses on increasing farm productivity, conserving water, and adopting climate-resilient techniques...
                    </Typography>
                    <Button endIcon={<ChevronRight />} color="inherit" sx={{ padding: 0, textTransform: 'none' }}>
                      Learn more
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            )}

            {/* Price Trends Section */}
            <section>
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '16px', display: 'flex', alignItems: 'center' }}>
                <CalendarMonth sx={{ marginRight: '8px' }} /> Price Trends
              </Typography>
              <Card sx={{ backgroundColor: 'white', borderColor: '#97BC62' }}>
                <CardHeader title="Major Crop Prices (per quintal)" />
                <CardContent>
                  <Box component="ul" sx={{ padding: 0, listStyle: 'none', margin: 0 }}>
                    {[
                      { crop: 'Wheat', price: '₹2,015' },
                      { crop: 'Rice', price: '₹1,960' },
                      { crop: 'Maize', price: '₹1,850' },
                      { crop: 'Soybean', price: '₹3,950' },
                    ].map((item, index) => (
                      <li key={index} style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>{item.crop}</Typography>
                        <Typography>{item.price}</Typography>
                      </li>
                    ))}
                  </Box>
                </CardContent>
                <CardActions>
                  <Button color="inherit" sx={{ padding: 0, textTransform: 'none' }}>
                    Read detailed analysis
                  </Button>
                </CardActions>
              </Card>
            </section>
          </main>

          {/* Sidebar */}
          <aside>
            {/* Weather Updates */}
            <section>
            <Card sx={{ backgroundColor: 'white', borderColor: '#97BC62', marginBottom: '16px' }}>
              <CardHeader
                avatar={<WbSunny sx={{ color: '#2C5F2D' }} />}
                title="Expert Insights"
                subheader="Best crops for the current season"
              />
              <CardContent>
                <Typography paragraph>
                  Based on current climate conditions and market demand, our experts recommend the following crops for this season:
                </Typography>
                <Box component="ul" sx={{ padding: 0, listStyle: 'none', margin: 0 }}>
                  {[
                    { icon: <Spa sx={{ marginRight: '8px' }} />, text: 'Pulses (Moong and Urad)' },
                    { icon: <Grass sx={{ marginRight: '8px' }} />, text: 'Oilseeds (Groundnut and Soybean)' },
                    { icon: <LocalFlorist sx={{ marginRight: '8px' }} />, text: 'Cotton' },
                  ].map((item, index) => (
                    <Box key={index} component="li" sx={{ display: 'flex', alignItems: 'center', paddingY: '4px' }}>
                      {item.icon}
                      <Typography>{item.text}</Typography>
                    </Box>
                  ))}
                </Box>
                <Button endIcon={<ChevronRight />} color="inherit" sx={{ padding: 0, textTransform: 'none', marginTop: '16px' }}>
                  Read detailed analysis
                </Button>
              </CardContent>
            </Card>

            <Card sx={{ backgroundColor: 'white', borderColor: '#97BC62' }}>
              <CardHeader
                avatar={<Opacity sx={{ color: '#2C5F2D' }} />}
                title="Stay Updated"
                subheader="Subscribe to our newsletter"
              />
              <CardContent>
                <TextField
                  label="Enter your email"
                  variant="filled"
                  fullWidth
                  sx={{ backgroundColor: '#F0E6D2', borderColor: '#97BC62', marginBottom: '16px' }}
                />
                <Button
                  fullWidth
                  variant="contained"
                  sx={{ backgroundColor: '#2C5F2D', '&:hover': { backgroundColor: '#4A7023' } }}
                >
                  Subscribe
                </Button>
              </CardContent>
            </Card>
            </section>
          </aside>
        </Box>
      </div>
              <Box sx={{ marginBottom: '32px' }}>
                {/* Contract Farming Laws */}
                <Card sx={{ backgroundColor: 'white', borderColor: '#97BC62', marginBottom: '16px' }}>
                  <CardHeader
                    title="New Contract Farming Laws Passed"
                    subheader="Government ensures more transparency for farmers"
                  />
                  <CardContent>
                    <Typography paragraph>
                      The government has recently passed new laws that regulate contract farming. These laws aim to protect farmers' interests by ensuring fair terms, better pricing, and more transparency in agreements with contractors...
                    </Typography>
                    <Button color="inherit" sx={{ padding: 0, textTransform: 'none' }}>
                      Learn more
                    </Button>
                  </CardContent>
                </Card>

                <Card sx={{ backgroundColor: 'white', borderColor: '#97BC62' }}>
                  <CardHeader
                    title="Understanding Your Rights as a Farmer"
                    subheader="Know the legal framework for contract farming"
                  />
                  <CardContent>
                    <Typography paragraph>
                      Contract farming has become an essential part of modern agriculture, but it's important for farmers to know their rights. This article provides a detailed explanation of the legal aspects of contract farming agreements...
                    </Typography>
                    <Button color="inherit" sx={{ padding: 0, textTransform: 'none' }}>
                      Learn more
                    </Button>
                  </CardContent>
                </Card>
              </Box>
    </div>
  );
}
